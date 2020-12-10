# 🌈 vue-image-shadow

A Vue image component. Simple realization of image shadow.

[![npm](https://img.shields.io/npm/v/vue-image-shadow?style=flat-square&color=orange)](https://www.npmjs.com/package/vue-image-shadow) ![test-ci](https://github.com/image-component/vue-image-shadow/workflows/test-ci/badge.svg) ![](https://img.shields.io/github/last-commit/image-component/vue-image-shadow/main?color=%23722ed1&style=flat-square) ![](https://img.shields.io/npm/dt/vue-image-shadow?color=%23eb2f96&style=flat-square) ![](https://img.shields.io/npm/l/vue-image-shadow?style=flat-square&color=red)

## 📚 Example

Online: https://image-component.github.io/vue-image-shadow/

## 📦 Install

```bash
npm i vue-image-shadow
# or
yarn add vue-image-shadow
```

## 🎉 Usage

```js
// main.js
import ImageShadow from 'vue-image-shadow'
Vue.component('image-shadow', ImageShadow)
```

## 📔 API

| Property     | Description                         | Type          | Required | Default |
| ------------ | ----------------------------------- | ------------- | -------- | ------- |
| className    | Component extra class.              | string        | ✖        | -       |
| shadowBlur   | The shadow blur of the image.       | number        | ✖        | 20      |
| shadowHover  | Whether to support the mouse hover. | boolean       | ✖        | false   |
| shadowRadius | The border radius of the image.     | number        | ✖        | 8       |
| src          | The src of the image.               | string        | ✔        | -       |
| width        | The width of the image.             | number        | ✖        | 300     |

## 🔨 Development

```bash
yarn
yarn start
```

## License

[MIT](https://github.com/image-component/vue-image-shadow/blob/main/LICENSE)
