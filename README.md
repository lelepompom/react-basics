# React basics

### Onboarding
Rich Internet Applications on client side.

[React](https://reactjs.org/) is useful for SPA containing many information that load dynamically, like Facebook, LinkdIn, Instagram.

Recommended:
* _React Development Essentials_ plugin for VS Code.
* _React Developer Tools_ extension for Chrome.

### Get started

> NPM
```npm update -g npm```
```npm config edit``` : when proxy
```npm init``` : create package.json
```npm i -g grunt-cli grunt-init karma karma-cli```
```npm i jasmine-core tslint --save --save-dev```
```npm start```
```npm test```
```npm build```
```npm eject``` : webpack

> [REACT APP](https://github.com/facebook/create-react-app)
```npx create-react-app my-app``` : do not install globally just for single use
```cd my-app```
```npm start```

> [Add React to an existing website](https://reactjs.org/docs/add-react-to-a-website.html)
You will need webpack and babel. Content Delivery Network [(CDN)](https://reactjs.org/docs/cdn-links.html)
```npm i react react-dom --save```

> [REDUX](https://redux.js.org/introduction/getting-started)
Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger. You can use Redux together with React, or with any other view library. It is tiny (2kB, including dependencies), but has a large ecosystem of addons available.
```npm i --save react-router-dom redux react-redux```
