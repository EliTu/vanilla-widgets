# Vanilla Widgets

Public URL: <http://vanilla-widgets.herokuapp.com/>

## Intro

Vanilla Widgets is a lightweight and simple, yet very flexible recommendation widget app. Using the [Taboola](https://www.taboola.com) API to fetch the publisher recommendation data, the app knows how to dynamically display the correct recommendation widget with all publisher data and correct headers, allowing to potentially integrate an unlimited amount of recommendation widget types in the future.

No JS framework, UI libraries or any other 3rd party shipped dependencies were used in creating the app.

## How to run

**NOTE**: prior to running the app, make sure that your browser is not using Ad blocking extensions or tools, as this will interfere with the API and will not allow you to render any content. Either green-list the app or alternatively run it in incognito mode.

There are 2 ways to run the app:

1. **Public URL**: Lunch the hosted app using the public URL provided above. (**NOTE**: the url should run on http protocol and not https, as running on https will cause API fetch issues).

2. **Run locally using the dev server**: clone the repo, open the terminal on the projects root folder and enter `npm run dev`, this will boot up the local dev server on port 3000. Open a new browser tab and enter the url localhost:3000 to access the app locally.

3. **Run locally using Vite build preview**: clone the repo, cd into the project's root folder and enter `npm run serve` to lunch the app on a build preview local server on port 5000. Open a browser and lunch localhost:5000 to access the app locally.

## Tech used

- The app was scaffolded and bundled using [Vite](https://vitejs.dev).
- JS code was written and compiled using [TypeScript](https://www.typescriptlang.org) for strict type checking and better IDE integration.
- CSS code was written and compiled using [SASS](https://sass-lang.com).
- Unit tests using [Jest](https://jestjs.io).
- Running git pre-commit test hooks using [husky](https://github.com/typicode/husky).
