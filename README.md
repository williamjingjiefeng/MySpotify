# Starter Kit for [Building My Spotify Applications in React with Redux, Redux thunk, Babel, Webpack, ESLint, JSON server, JEST, Immer and etc.]

 React and Redux deliberately ignored some commonly held best practices and I hope that I can sell you on rethinking the way that you're doing front-end development. Here's a few controversial ideas that we're going to cover in this application. First, React believes that HTML should be a projection of your application state rather than a source of truth. If you've ever worked in jQuery and/or Knockout JS, then you probably understand what I mean here. jQuery caused us to make this mistake for years. We stored data in the DOM and data in JavaScript, so at any given point which was the system of record? Any time that the JS changed, all of our UI had to be redrawn. React's virtual DOM changes how you think about your app. Your app is a function of props and state. You don't store anything in the DOM. It's simply an implementation detail. Second, as you'll see, React takes the stance that JavaScript and HTML belong in the same file. For years, we've talked about separation of concerns as a common best practice, but is separation of concerns always a good thing? JavaScript and HTML are fundamentally intertwined, yet there's no strongly typed interface to help keep them in sync. So, as you'll see, there's some clear benefits to handling your JavaScript and your markup in the same file. As we move on to Redux or Flux, you'll see that there are some key advantages to unidirectional data flows as opposed to the two-way binding that you might have experienced with other frameworks. Unidirectional data flows make our application easier to think about and will offer us a simple path toward updating our data stores when our app's data changes. Now this sounds crazy, but when using React, inline styles are actually useful again because they can actually increase code maintainability by avoiding the creation of bloated style sheets that are risky to change. React components allow you to utilize the power of JavaScript to write dynamic, deterministic, and component-specific styles that are potentially easier to maintain than traditional style sheets. And brace yourself because we've entered a new era. In React, all variables should be global. We have shown how to manage global state as well using React Context besides Redux in the application. Global variables are awesome. The theming system helps you in building a theme of your choice and apply it to test it live. There are a prefined set of themes in the schema file and on top of that you can customise your own theme and apply that on the fly using Theme provider and styled component.

## Get Started

1. **Install [Node 8](https://nodejs.org)** or newer. Need to run multiple versions of Node? Use [nvm](https://github.com/creationix/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows)
2. **Navigate to this project's root directory on the command line.**
3. **Install Node Packages.** - `npm install`
4. **Install [React developer tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) and [Redux Dev Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)** in Chrome.
5. Having issues? See below.

## Having Issues? Try these things first:

1. Run `npm install` - If you forget to do this, you'll get an error when you try to start the app later.
2. Don't run the project from a symbolic link. It will cause issues with file watches.
3. Delete any .eslintrc in your user directory and disable any ESLint plugin / custom rules within your editor since these will conflict with the ESLint rules defined in the application.
4. On Windows? Open your console as an administrator. This will assure the console has the necessary rights to perform installs.
5. Ensure you do not have NODE_ENV=production in your env variables as it will not install the devDependencies. To check run this on the command line: `set NODE_ENV`. If it comes back as production, you need to clear this env variable.
6. Nothing above work? Delete your node_modules folder and re-run "npm cache clean --force" and "npm install."

### Production Dependencies

| **Dependency**   | **Use**                                                                         |
| ---------------- | ------------------------------------------------------------------------------- |                            |
| bootstrap        | CSS Framework                                                                   |
| immer            | Helper for working with immutable data                                          |
| prop-types       | Declare types for props passed into React components                            |
| react            | React library                                                                   |
| react-dom        | React library for DOM rendering                                                 |
| react-redux      | Connects React components to Redux                                              |
| react-router-dom | React library for routing                                                       |
| react-toastify   | Display messages to the user                                                    |
| redux            | Library for unidirectional data flows                                           |
| redux-thunk      | Async redux library                                                             |
| reselect         | Memoize selectors for performance                                               |
| lodash           | Take the hassle out of working with arrays, numbers, objects, strings, etc.     |
| shortid          | Create amazingly short non-sequential url-friendly unique ids                   |
| styled-components| Utilise tagged template literals (addition to JavaScript) and the power of CSS  |
| webfontloader    | Provide a common interface to loading fonts regardless of the source            |

### Development Dependencies

| **Dependency**                  | **Use**                                                          |
| ------------------------------- | ---------------------------------------------------------------- |
| @babel/core                     | Transpiles modern JavaScript so it runs cross-browser            |
| babel-eslint                    | Lint modern JavaScript via ESLint                                |
| babel-loader                    | Add Babel support to Webpack                                     |
| babel-preset-react-app          | Babel preset for working in React. Used by create-react-app too. |
| css-loader                      | Read CSS files via Webpack                                       |
| cssnano                         | Minify CSS                                                       |
| enzyme                          | Simplified JavaScript Testing utilities for React                |
| enzyme-adapter-react-16         | Configure Enzyme to work with React 16                           |
| eslint                          | Lints JavaScript                                                 |
| eslint-loader                   | Run ESLint via Webpack                                           |
| eslint-plugin-import            | Advanced linting of ES6 imports                                  |
| eslint-plugin-react             | Adds additional React-related rules to ESLint                    |
| fetch-mock                      | Mock fetch calls                                                 |
| html-webpack-plugin             | Generate HTML file via webpack                                   |
| http-server                     | Lightweight HTTP server to serve the production build locally    |
| jest                            | Automated testing framework                                      |
| json-server                     | Quickly create mock API that simulates create, update, delete    |
| mini-css-extract-plugin         | Extract imported CSS to a separate file via Webpack              |
| node-fetch                      | Make HTTP calls via fetch using Node - Used by fetch-mock        |
| npm-run-all                     | Display results of multiple commands on single command line      |
| postcss-loader                  | Post-process CSS via Webpack                                     |
| react-test-renderer             | Render React components for testing                              |
| react-testing-library           | Test React components                                            |
| redux-immutable-state-invariant | Warn when Redux state is mutated                                 |
| redux-mock-store                | Mock Redux store for testing                                     |
| rimraf                          | Delete files and folders                                         |
| style-loader                    | Insert imported CSS into app via Webpack                         |
| webpack                         | Bundler with plugin ecosystem and integrated dev server          |
| webpack-bundle-analyzer         | Generate report of what's in the app's production bundle         |
| webpack-cli                     | Run Webpack via the command line                                 |
| webpack-dev-server              | Serve app via Webpack                                            |
