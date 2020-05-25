# NextJS Boilerplate Repository

It's annoying to setup the configuration for TypeScript, ESLint and more for each and every project so I've created a Github template repository to use for JAMStack Applications using NextJS

## JAMStack

**JAMStack** is a modern technology stack used for simple web applications standing for:

- JavaScript
- APIs
- Markup

In the words of the [JAMStack website](https://jamstack.org/), it is

> Fast and secure sites and apps delivered by pre-rendering files and serving them directly from a CDN, removing the requirement to manage or run web servers.

NextJS is just one of the many static site generators. It is more than a site generator though and is an excellent framework for React. It is a server-side rendered site generator in that the user writes the code using React, but it is marked up into HTML at the server side.

## How to use this repo?

The `boilerplate-components` directory contains React components used in the default template repository. These should be replaced when used in `index.tsx` in new applications.

There is a `components` folder in the root directory which contains sub-directories named `atom`, `molecule`, `organism` and `template`. These should contain React components based on the [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) principle.

This application should include unit tests from the get go. `__tests__` is a directory that `jest`, a React test runner, will find and test the valid tests within. Also, components should use snapshot tests and also unit tests so there should be a corresponding `___.test.tsx` file for each component.

## Tech Stack

<span>
<img src="https://cdn.auth0.com/blog/react-js/react.png" width=16 height=16>
<a href="https://reactjs.org/" style="padding-left: 6px"><strong>React</strong></a>
Awesome JavaScript UI Library used by everything
</span>
<br/>
<span>

<span>
<img src="https://cdn.auth0.com/blog/next3/logo.png" width=16 height=16>
<a href="https://nextjs.org/" style="padding-left: 6px"><strong>NextJS</strong></a>
React Framework to build static and dynamic sites
</span>
<br/>
<span>

<span>
<img src="https://miro.medium.com/max/600/1*i37IyHf6vnhqWIA9osxU3w.png" width=16 height=16>
<a href="https://jestjs.io/" style="padding-left: 6px"><strong>Jest</strong></a>
React Testing framework and test runner
</span>
<br/>
<span>

<span>
<img src="https://testing-library.com/img/octopus-128x128.png" width=16 height=16>
<a href="https://testing-library.com/" style="padding-left: 6px"><strong>React Testing Library</strong></a>
Unit Tests for React Components
</span>
<br/>
<span>

<span>
<img src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png" width=16 height=16>
<a href="https://www.typescriptlang.org/" style="padding-left: 6px"><strong>TypeScript</strong></a>
Typed JavaScript
</span>
<br/>
<span>

<span>
<img src="https://www.styled-components.com/atom.png" width=16 height=16>
<a href="https://styled-components.com/" style="padding-left: 6px"><strong>Styled Components</strong></a>
Modular CSS library for React Components
</span>
<br/>
<span>

<span>
<img src="https://eslint.org/assets/img/favicon.512x512.png" width=16 height=16>
<a href="https://eslint.org/" style="padding-left: 6px"><strong>ESLint</strong></a>
JavaScript & TypeScript Linter
<br/>
</span>

<span>
<img src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/11490474241551942136-512.png" width=16 height=16>
<a href="https://prettier.io/" style="padding-left: 6px">
<strong >Prettier</strong>
</a>
Opinionated Code Formatter
<br/>
</span>
