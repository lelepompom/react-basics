# React basics

## Onboarding
Rich Internet Applications on client side. [React](https://reactjs.org/) is useful for SPA containing many information that load dynamically, like Facebook, LinkdIn, Instagram.

Recommended:
* _React Development Essentials_ plugin for VS Code.
* _React Developer Tools_ extension for Chrome.

## Get started

> NPM

```npm update -g npm```

```npm config edit``` : when proxy

```npm init``` : creates package.json

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

## JSX
[JSX](https://reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized) is a syntax to include XHTML into Javascript. React Components must be named in PascalCase. Attrs and events, in camelCase. This will be the name of the tag.

At HTML `class` and `for` props becomes `className` and `htmlFor` to prevent conflicts with Javascript ones .

On elements its important to return a single tag. If this is not possible, we can return multiple tags inside <React.fragment> to avoid a global tag on them. This can be needed for example on returned option tags inside a select.

## Components and Props
All React components must act like pure functions with respect to their [props](https://reactjs.org/docs/components-and-props.html).
Props are inmutable and read-only.

## States
[State](https://reactjs.org/docs/state-and-lifecycle.html) cannot be modified directly, is private and belongs to the component. State value can be set by `this.setState`. 

See how you can organize your [files](https://medium.com/@Charles_Stover/optimal-file-structure-for-react-applications-f3e35ad0a145)

## Lifecycle
* getDefaultProps()
* getInitialState()
* componentWillMount()
* render()
* componentDidMount()

State musnt change while is rendering. It can do it on events.

#### Update State
* shouldComponentUpdate(): boolean
* componentWillUpdate(next_props, next_state)
* render()
* componentDidUpdate()
#### Update Props
* componentWillReceiveProps(next_props)
* shouldComponentUpdate(): boolean
* componentWillUpdate()
* render()
* componentDidUpdate()
#### Unmount
* componentWillUnmount()

## Error Boundaries
* static getDerivedStateFromError(error)
* componentDidCatch()
* render()

A class component becomes an error boundary if it defines either (or both) of the lifecycle methods static getDerivedStateFromError() or componentDidCatch(). Use static getDerivedStateFromError() to render a fallback UI after an error has been thrown. Use componentDidCatch() to log error information.

[Error boundaries](https://reactjs.org/docs/error-boundaries.html) work like a JavaScript catch {} block, but for components. Only class components can be error boundaries. In practice, most of the time you’ll want to declare an error boundary component once and use it throughout your application.

Note that error boundaries only catch errors in the components below them in the tree. An error boundary can’t catch an error within itself. If an error boundary fails trying to render the error message, the error will propagate to the closest error boundary above it. This, too, is similar to how catch {} block works in JavaScript.

