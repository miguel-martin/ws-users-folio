# Unizar-Folio user sync
A React project to test unizar-folio user sync


## Setup
First install dependencies `npm run install`

Then `cp .env.sample .env`

Then fill in `.env` vars with your credentials

Then edit `package.json` and fill the `"homepage":` property (refer to next section for further details)

## Deployment
This project is prepared to be deployed in a subdir defined by the `homepage`property in `package.json`file (refer to [https://create-react-app.dev/docs/deployment/] for further details) 

Since it may show some personal data, it is a good idea to protect unwanted access to it. To setup your `BasicAuth` refer to [https://httpd.apache.org/docs/2.4/es/howto/auth.html]

Considering all of the above, to deploy to an Apache Server add the following lines to your `VirtualHost` config:

```# This is a sample config to deploy to /unizar-folio subfolder
Alias /unizar-folio /var/www/html/ws-folio-unizar-test/
<Directory /var/www/html/ws-folio-unizar-test>
           Options -MultiViews
           RewriteEngine On
           RewriteCond %{REQUEST_FILENAME} !-f
           RewriteRule ^ /unizar-folio/index.html [QSA,L]
           AuthType Basic
           AuthName "Restricted Files"
           # (Following line optional)
           AuthBasicProvider file
           AuthUserFile "/home/miguelm/apache-passwd/passwords" # path/to/htpasswdFile
           Require user miguelm # your privileged user (must exist in AuthUserFile!)
</Directory>
```


## Available scripts

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

## Learn More

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

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
