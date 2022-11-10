<template>
  <div>
    <div class="feedback-button" @click="toggleFeedbackModal()">
      <span class="icon-call-in"></span>
    </div>
    <div
      :class="dark ? 'dark' : 'light'"
      class="feedback-modal"
      @click.self="toggleFeedbackModal()"
      v-if="showFeeadbackModal"
    >
      <div
        class="feedback-modal-wrapper"
        :style="{ width: width, height: height }"
      >
        <div class="close-button" @click="toggleFeedbackModal()">
          <span class="icon-close"></span>
        </div>

        <form class="feedback-form" v-if="!success">
          <span class="feedback-title">SEND YOUR FEEDBACK</span>
          <textarea
            placeholder="Your message"
            v-model="model.message"
            cols="30"
            rows="10"
          ></textarea>
          <button type="button" class="submit-button" @click="feedbackAction()">
            Send message
          </button>
        </form>
        <div class="success-area" v-else>
          <span class="icon-check"></span>
          <span>We have got your feedback!</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FFeedback",
  props: {
    dark: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: "500px",
    },
    height: {
      type: String,
      default: "400px",
    },
  },
  data() {
    return {
      showFeeadbackModal: false,
      success: false,
      model: {
        message: null,
      },
    };
  },
  computed: {
    testId() {
      return this.$furkan || "hi";
    },
  },
  mounted() {},
  methods: {
    toggleFeedbackModal() {
      this.showFeeadbackModal = !this.showFeeadbackModal;
      this.success = false;
      this.model.message = null;
    },
    ...mapActions({
      sendFeedback: "sendFeedback",
    }),

    feedbackAction() {
      let payload = {
        clientId: 4,
        text: this.model.message,
      };
      console.log("p", payload);
      this.sendFeedback(payload).then((res) => {
        console.log(res);
        this.success = true;
        this.model.message = null;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.feedback-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #f7f7f7;
  border-radius: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 32px;
  }
}
.feedback-modal {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  .feedback-modal-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    padding: 40px;
    box-shadow: 0px 5px 16px rgba(0, 0, 0, 0.28);

    .close-button {
      position: absolute;
      right: 16px;
      top: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 100%;
      padding: 6px;
      cursor: pointer;
      img {
        width: 32px;
      }
    }

    .feedback-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      .feedback-title {
        margin-bottom: 12px;
        font-size: 24px;
      }
      input {
        width: 100%;
      }
      textarea {
        border-radius: 4px;
        text-indent: 16px;
        padding-top: 16px;
        outline: 0;
        border: 0;
        color: #ffffff;
        resize: none;
        width: 100%;
        font-size: 14px;
      }
      .submit-button {
        margin-top: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: 0;
        border: 0;
        padding: 20px;
        width: 100%;
        border-radius: 4px;
        cursor: pointer;
      }
    }
    .submit-button {
      background-color: #243447;
      background-color: #f27a1a;
      color: #ffffff;
    }

    .success-area {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        width: 150px;
      }
      span {
        margin-top: 24px;
        font-size: 24px;
        font-weight: 700;
      }
    }
  }

  &.dark {
    background-color: #00000095;

    .feedback-modal-wrapper {
      background-color: #141d26;
      .close-button {
        background-color: #ffffff70;
      }

      .feedback-form {
        .feedback-title {
          color: #ffffff;
        }
        textarea {
          background-color: #243447;
          color: #ffffff;
        }
      }

      .success-area {
        span {
          color: #ffffff;
        }
      }
    }
  }

  &.light {
    background-color: #00000080;

    .feedback-modal-wrapper {
      background-color: #f6f6f6;
      .close-button {
        background-color: #ffffff70;
      }

      .feedback-form {
        .feedback-title {
          color: #243447;
        }
        textarea {
          background-color: #e8e8e8;
          color: #243447;
        }
      }

      .success-area {
        span {
          color: #243447;
        }
      }
    }
  }
}
</style>
