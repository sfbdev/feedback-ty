# ty-feedback-list

ty-feedback modülünden gelen feedbackleri görmek için geliştirilmiştir.

## Proje kurulumu

```
yarn install
```

### Geliştirme için derleme ve hot-reloads

```
yarn serve
```

### Production için minify etme ve derleme

```
yarn build
```

### Kodu formatlamak ve dosyaları düzenlemek için

```
yarn lint
```

## Basic Usage

Öncelikle **https://ty-feedback-list.netlify.app/register** adresinden client id alabilirsiniz.

```
Your component

<template>
  <feedeback-ty
    :dark="true"
    width="500px"
    height: 500px
  />
</template>

main.js

import FeedbackTy from "ty-feedback"
Vue.use(FeedbackTy, {clientId: yourClientID})

```

Test user için

test2@test.com
123123

