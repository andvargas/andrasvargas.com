# Things to fix

Authentication doesn't work as expected, I think the first thing I should transfer the isAuthenticated state to the redux store.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

To deploy the project to Netlify, just have to commit and push to GITHUB

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---

The live website is on [andrasvargas.com](https://andrasvargas.com)

## Start documenting today

I was inspired by this article: <https://www.freecodecamp.org/news/how-to-write-good-documentation/>

- Terminal commands I typed in
- Why I choose a particular method over another
- Links I visited for help or coughcopy-pastecough inspiration
- The order in which I did things

Idea regarding not just this project, but in general:
I have to focus more on creating new code then fixing or figuring out the old ones, as I spend a lot of time on the latter, and I don't progress with my courses.

7th January 2023
Implement knowledge learnt from Max Section 16 Form Validation - Contact.js

10 January
Fixed form validation

18 Jan v1.1
Create form component for adding a page - started
Fixed: glitch in Auth.js - av.com. where the registration switched randomly to login.

15 Feb.
Changed the text of the /Users/andrasvargyas/Sites/Andrasvargas.com/andrasvargas-frontend/public/service-seo-audit.md file.

13 March
Implemented a different path for both login and register: /login defaults to Log In, and /register to Register

28 March
Finalised Navigation bar, and added to Page template
Changed Page template design
Added a new page GA4 - GTM

5 April
Fixed login issue when changing from login to register and vice versa

21 July 2023
Added sticky menu bar to homepage - it appears at the bottom, and then when scrolled down, it sticks to the top.

## To Fix

Dashboard.js
The Task list doesn't have a unique key (Seems like it was a false positive, as now it works)
