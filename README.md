# 🌈 vue-image-shadow

A Vue image component. Simple realization of image shadow.

[![npm](https://img.shields.io/npm/v/vue-image-shadow?style=flat-square&color=orange)](https://www.npmjs.com/package/vue-image-shadow) ![test-ci](https://github.com/image-component/vue-image-shadow/workflows/test-ci/badge.svg) ![](https://img.shields.io/github/last-commit/image-component/vue-image-shadow/main?color=%23722ed1&style=flat-square) ![](https://img.shields.io/npm/dt/vue-image-shadow?color=%23eb2f96&style=flat-square) ![](https://img.shields.io/npm/l/vue-image-shadow?style=flat-square&color=red)

## 📚 Example

Online: https://image-component.github.io/vue-image-shadow/

## 🌀 Template

https://github.com/one-template/vue-component-template

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

| Property     | Description                         | Type    | Required | Default | Version |
| ------------ | ----------------------------------- | ------- | -------- | ------- | ------- |
| alt          | The alt of the image.               | string  | ✖        | -       | 1.1.0   |
| className    | Component extra class.              | string  | ✖        | -       | 1.0.0   |
| shadowBlur   | The shadow blur of the image.       | number  | ✖        | 20      | 1.0.0   |
| shadowHover  | Whether to support the mouse hover. | boolean | ✖        | false   | 1.0.0   |
| shadowRadius | The border radius of the image.     | number  | ✖        | 8       | 1.0.0   |
| src          | The src of the image.               | string  | ✔        | -       | 1.0.0   |
| width        | The width of the image.             | number  | ✖        | 300     | 1.0.0   |

## 🔨 Development

```bash
yarn
yarn start
```

## License

[MIT](https://github.com/image-component/vue-image-shadow/blob/main/LICENSE)
