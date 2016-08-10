# React Weather App
**Steps for how I am building my weather app, based on [ReactJS Fundamentals Curriculum](https://github.com/ReactjsProgram/react-fundamentals-curriculum)**
##Part 1: Hello World Starter App
Make a new project directory and change into it:

```
mkdir weather-app
cd weather-appId
```

Make a **.gitignore** file:

```
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

```
npm init
```
The above command will create a **package.json** file in your project directory.

Next, install the npm dependencies you will need:

```
npm install --save axios react react-dom react-router
```

And install all of the tooling to dev dependencies:

```
npm install --save-dev babel-core babel-loader babel-preset-react html-webpack-plugin webpack webpack-dev-server
```
Create **.babelrc** file in project directory:

```
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

```
touch webpack.config.js
```

Configure the **webpack.config.js** file:

```
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

```
mkdir app
cd app
```

In the app directory, create **index.html**

```
touch index.html
```

Configure **index.html**:

```
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

```
touch index.js
```

Configure index.js

```
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

Add scripts to **package.json**:

```
"scripts": {
  "production": "webpack -p",
  "build": "node_modules/.bin/webpack",
  "start": "node_modules/.bin/webpack-dev-server"
}
```

Start webpack:

```
npm start
```
or

```
npm run start
```

In browser, go to [http://localhost:8080](http://localhost:8080) and test to see that everything is working.

##Part 2: React Router
Set up project folder structure:

```
mkdir app/components
mkdir app/config
mkdir app/containers
mkdir app/styles
mkdir app/utils
```

Move your HelloWorld component to a **Main.js** file (Tyler suggests to put it in a **/containers** folder)

```
cd app/containers
touch MainContainer.js

cd ../app/components
touch Main.js
```

Set up route configuration file to activate the Main component whenever a user hits the index '/' path of the app:

```
```

Now instead of rendering to the DOM, render the routes configuration:

```
```