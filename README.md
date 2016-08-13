# React Weather App
**Steps for how I am building my weather app, based on [ReactJS Fundamentals Curriculum](https://github.com/ReactjsProgram/react-fundamentals-curriculum)**
##Part 1: Hello World Starter App
Make a new project directory and change into it:

```zsh
mkdir weather-app
cd weather-appId
```

Make a **.gitignore** file:

```zsh
touch .gitignore
```

And add node_modules and vim temp files to **.gitignore** file:

```
node_modules
.DS_Store
dist

*.swp
[._]*.s[a-w][a-z]
[._]s[a-w][a-z]
*.un~
Session.vim
.netrwhist
*~
```

Install npm in your project directory

```zsh
npm init
```
The above command will create a **package.json** file in your project directory.

Next, install the npm dependencies you will need:

```zsh
npm install --save axios react react-dom react-router
```

And install all of the tooling to dev dependencies:

```zsh
npm install --save-dev babel-core babel-loader babel-preset-react html-webpack-plugin webpack webpack-dev-server
```
Create **.babelrc** file in project directory:

```zsh
touch .babelrc
```

Configure the **.babelrc** file:

```
{
  'presets': [
    'react'
  ]
}
```

Create **webpack.config.js** file in project directory:

```zsh
touch webpack.config.js
```

Configure the **webpack.config.js** file:

```javascript
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  plugins: [ HtmlWebpackPluginConfig ]
}
```

Create and change to the app directory:

```zsh
mkdir app
cd app
```

In the app directory, create **index.html**

```zsh
touch index.html
```

Configure **index.html**:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Weather App</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
</head>
<body>
  <div id="app"></div>
</body>
</html>
```

Still in the app directory, create **index.js** to render a HelloWorld component:

```zsh
touch index.js
```

Configure index.js

```javascript
var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
  render: function() {
    return (
      <div>Hello World!</div>
    )
  }
});

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('app')
);

module.exports = HelloWorld;
```

Add scripts to **package.json**. Webpack was installed locally, which is why we have to prepend the **node_modules/.bin/** to the following scripts:

```json
"scripts": {
  "production": "webpack -p",
  "build": "node_modules/.bin/webpack",
  "start": "node_modules/.bin/webpack-dev-server"
}
```

Start webpack:

```zsh
npm start
```
or

```zsh
npm run start
```

In browser, go to [http://localhost:8080](http://localhost:8080) and test to see that everything is working.

##Part 2: React Router
Set up project folder structure:

```zsh
mkdir app/components
mkdir app/config
mkdir app/containers
mkdir app/styles
mkdir app/utils
```

Move your HelloWorld component to a **Main.js** file (Tyler suggests to put it in a **/containers** folder)

```zsh
cd ../app/containers
touch Main.js
```

Remember to leave the render component in the **app/index.js** when moving the container component code to **app/containers/Main.js**:

```javascript
//app/components/Main.js
var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
  render: function() {
    return (
      <div>Hello World!</div>
    )
  }
});

module.exports = HelloWorld;

```

After moving out the HelloWorld code, **app/index.js** should look like this:

```javascript
var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');

ReactDOM.render(
    routes,
    document.getElementById('app')
);
```

Create **app/config.routes.js** file:

```zsh
touch app/config/routes.js
```
Set up route configuration file to activate the Main component whenever a user hits the index '/' path of the app. Now instead of rendering to the DOM, render the routes configuration:

```javascript
//app/config/routes.js
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Main = require('../containers/Main');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main} />
  </Router>
);

module.exports = routes;
```

##Part 3: Home Component UI
Create a home component:

```zsh
touch app/components/Home.js
```
Require **React** *and* **React Router**

```javascript
//app/components/Home.js
var React = require('react');
var ReactRouter = require('react-router');

var Home = React.createClass({
  render: function() {
    return (
      <div>Home</div>
    )
  }
});

module.exports = Home;
```

Then set the Home component to the IndexRoute in your route configuration:

```javascript
//app/config/router.js
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Main = require('../components/Main');
var Home = require('../components/Home');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
);

module.exports = routes;
```

Because the `<IndexRoute />` is embedded within the `<Route>` to the **Main component**, the **Main component** needs to be updated by addding `{this.props.children}`:

```
var React = require('react');

var Main = React.createClass({
  render: function() {
    return (
      <div>Hello Pooper!
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;

```

At this point when you go to [localhost:8080](http://localhost:8080) you should see any UI the Main component spits out as well as any UI the Home component spits out.

Download the full page background image and make an **app/images/** directory to put it in

```zsh
mkdir app/images
```

Now use the image to give the **Home component** some background styles. First make a styles directory and a file for Home styles:

```zsh
mkdir app/styles
touch app/styles/index.js
```

Declare styles for a **patternBackground**:

```javascript
//app/styles/index.js
var styles = {
  patternBackground: {
    height: '100vh',
    backgroundImage:' url(app/images/pattern.svg)'
  }
};

module.exports = styles;
```

Require the styles in the **Home component** and add implement the styles, inline:

```javascript
var React = require('react');
var ReactRouter = require('react-router');
var styles = require('../styles');

var Home = React.createClass({
  render: function() {
    return (
      <div style={styles.patternBackground}>Home!</div>
    )
  }
});

module.exports = Home;

```

Add an input field and button the the **Home component**.

The app should now look like the one from [Tyler McGinnis' README](https://github.com/ReactjsProgram/react-fundamentals-curriculum).

<img src="http://www.reactjsprogram.com/images/home-ui.png" width="400">

