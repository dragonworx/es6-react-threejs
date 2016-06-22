# ES6 + JSX + Babel + WebPack + Three.js Boilerplate Project

This is a starter project which let's you work with the following stack:

* **ES6** - use the latest JavaScript language features for better application design
* **JSX** - build React components (ES6 class-based) for your UI layer
* **Babel** - compiles your ES6 code including transforming JSX files
* **WebPack** - package up and bundle your project
* **Three.js** - create 3D graphics rendered to canvas

## How to install

First you'll want to install the npm dependencies.

> `npm install`

## How to build and run

This project includes `webpack-dev-server` which integrates with `webpack` to build and serve your project.

This is all wrapped in the npm `start` script as defined in `package.json`.

> `npm run start`

After a few seconds you should see a `VALID` statement last in your output when all done, if there were no errors.

You can now visit [http://localhost:3000/webpack-dev-server/](http://localhost:3000/webpack-dev-server/) in your browser.

This page is actually `webpack-dev-server` wrapping your app in an iframe.

It uses a file watcher so when you make changes to `src/*` it will automatically rebuild, and reload the page.

If you want to hit your app directly without the dev server wrapping, go to [http://localhost:3000/](http://localhost:3000/). The file watcher will still rebuild your project but you will need to manually rebuild. 