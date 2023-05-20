# React_Learning
Learning the foundations of React Library

<!-- Homework -->
<!-- 1. What is CDN -- Content Delivery Network -->
<!-- What is crossorigin -->
<!-- What is difference between async and defer -->
<!-- What is difference between tilde and caret(^) -->
<!-- Explore script types -->
<!-- Explore babel -->
<!-- how to write image tags in jsx -->
<!-- What is Virtual DOM and why do we use it for reconciliation (diff algorith) --> //Akshay Saini Session 5
<!-- why do we use keys in React elements -->
<!-- What is React Fibre in React16-->
<!-- Why is CDN/Cloudinary considered a best place to host images -->
<!-- SPA --Single page Application -->
<!-- Types of Routing 1)Clientside and 2)ServerSide routing -->

1. We generally have only one root in our React App
2. React.createRoot is used to create a root Element and whatever you pass inside createRoot( will be marked as root of Application).
3. When we have caret in package.json dependency such as ^2.1.2, the particular package will update itself.
4. package-lock.json is an imp file that locks the package version.It should be never place in .gitignore
5. Once you remove CDN script, you can get "Browser scripts cannot have imports or exports" error, to solve this,
---add type="module" in html file where you have App.js added.
---<script type="module" src="App.js"></script>
6. Once you save anything, server will reload everything, this concept is known as --> HMR - Hot Module Replacement(Live Server) which is supported by parcel.Build using File Watcher Algorithm - C++.
7. When creating production build, remove line "main": "App.js", from package.json file.
8. Parcel Functionalities :- BUNDLING,MINIFY,Code Cleaning,Dev and Prod Build,Image Optimization,
                             Caching while Development(.parcel-cache folder used), File Compressions, 
                             Compatible with Older browser versions(Adds polyfills), Enable HTTPS on dev,
                             Consistent hashing algorithm,handles port number,Handles Transitive Dependencies.
                             tree shaking(Removing unwanted code).
9. BABEL - Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into            backwards-compatible JavaScript code that can be run by older JavaScript engines. It allows web developers to take advantage of the    newest features of the language.

10. In order to remove console.logs from our build before moving to production, we use babel tool.
Steps1 :- Install babel-plugin-transform-remove-console as dev-dependencies
Steps2 :- Create .babelrc file and configure.
Steps3 : Add {"plugins": [["transform-remove-console", { "exclude": ["error", "warn"] }]]}

11. class is className in JSX and JSX uses React.createElement internally.

12. When UI is render as per the config returned by Backend API's,it is called Config Driven UI (Swiggy) -- Session5AkshaySaini 
----System Design round question in Interviews
13. If is considered a best practice to add keys and if key present, consider adding index keys as our last option to our React Elements.
----nokeys is not acceptable
14. Shimmer Design User experience is used when our inital data is render and we place empty skeleton till they load.(eg. Youtube,swiggy)----Akshay saini Session 8 (2:16:00)

<!-- In order to optimise our React app and make it development/production ready, we need some packages -->
**1**. Bundlers :- vite,parcel,webpack(Here we'll use parcel)

# Now we use a package manager like yarn or npm.
Syntax :- npm init or yarn init

# Installing dev dependencies
parcel :- npm install --save-dev parcel OR npm install -D parcel

# Ways to Install react in our project
1. Either include CDN links
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
2. Install react library from npm.
    npm i react
    npm i react-dom

# To initiate a server on our Application using Parcel Bundler--Development Build
Command :- npx parcel index.html

# To Deploy our Code to Production , we need to generate a Production Build (Remove existing dist folder)
Command :- npx parcel build index.html (parcel bundles our code)(console logs are removed by parcel)

# To run our server on https, add --https
Command :- npx parcel index.html --https

# To ensure our App works in older browser version, we use browserlist package.
Add in package.json :- "browserlist":[""]