# 🌈 vue-component-template

A template for rapid development of vue2 components to satisfy component development, packaging, release, document development, document packaging, and document deployment.

English | [简体中文](./README.zh-CN.md)

## 💖 How to use?

![](./assets/1.png)

## 💎 Catalog Introduction

```
├── assets                 Store fixed resources
├── docs                   Component documentation
│   ├── .vuepress          VuePress
│   │   ├── components     Demo use
│   │   ├── config.js      VuePress main configuration
│   │   └── enhanceApp.js  VuePress expand configuration
│   ├── README.md          Used to show component introduction
│   ├── changelog.md       Used to display component history
│   └── demo.md            Used to display component Demo
├── examples               Component development and debugging
├── public                 Component development and debugging display
├── src                    Component home directory
│   ├── index.js           Component registration
│   └── template.vue       Component implementation code
└── vue.config.js          Component development package configuration
```

## 🤖 Command introduction

| Name | Description | Remarks |
| -- | -- | -- |
| `npm run start` | Start component development | - |
| `npm run build` | Component packaging | - |
| `npm publish` | Component release | Recommended for first removal prepublishOnly |
| `npm run docs:start` | Document start | - |
| `npm run docs:build` | Document packaging | - |
| `npm run docs:deploy` | Document release | The default is to use GitHub Pages |
| `npm run deploy` | Document package and release | - |

## 🍭 Component

### Development

```bash
npm i
npm run start
# http://localhost:8080/
```

### Unpack

```bash
npm run build
```

- Remove map by default
- Do not pull independent CSS files by default
- More view official website configuration
- The package file is generated in the dist file by default

### Release

> `package.json` introduction

1. If you want to publish npm, `private` needs to be set to `false`.
2. The build command can be modified according to actual conditions.
3. After main decides to install the component, import points to it.
4. files Contains the files at the time of publishing, and includes README.md by default.
5. Others can be understood according to the meaning of the word.

## 📚 Documentation

### Start

```bash
npm run docs:start
# http://localhost:8888/
```

### Online preview

https://one-template.github.io/vue-component-template/

### Description

- Use VuePress
- Use basic layout, please add more by yourself
- Component references, currently need to be copied to components, if there is a better way, please PR
- Because the document is deployed on GitHub Pages, the `base` of `config.js` is set to the project name
- Update the `highlight.js` version carefully
- One 🌰 : [Knotes](https://github.com/xrkffgg/Knotes)

## 🎈 Aide

- [Issue template](https://github.com/one-template/issue-template)
- [PR template](https://github.com/one-template/pr-template)
- [Actions use](https://github.com/github-actions-workflows/.github)

## 🎉 Who are using？

- 

## License

[MIT](https://github.com/one-template/vue-component-template/blob/main/LICENSE)
