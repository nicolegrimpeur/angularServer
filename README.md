# Web Server Angular

## Goals

Creation of a system allowing you to manage a web server hosting projects using Angular with Express.

Work too with the Ionic Project using Angular.

## Table of contents

- [Goals](#goals)
- [Table of contents](#table-of-contents)
- [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Npm](#npm)
- [Usage](#usage)
    - [Import](#import)
    - [Variables](#variables)
    - [First part](#first-part)
    - [Second part](#second-part)
    - [Subpath](#subpath)

## Installation

### Prerequisites

Works with version of Node.Js superior or equal to 16.

### Npm

You can install the library using npm:

```bash
npm install angularwebserver
```

## Usage 

There are two parts in this project, the first one is usefull for the route '/'
and the other one for the route '/*' of you project.

### Import

You can import the package using :

```javascript
// if you are using CommonJs
const angularServer = require('angularwebserver');

// if you are using ES6
import {angularServer} from "angularwebserver";
```

### Variables

Here are some variable which could be usefull for using this package and that you will see in the next part of this documentation.

#### link

The variable link is the link of the project you want to serve.

If you are on localhost, it will be "http://localhost:port".

#### dirname

The variable dirname is the name of the directory where you want to serve your project.

You can obtain it using the path package :

```javascript
// if you are using CommonJs
const path = require('path');

// if you are using ES6
import * as path from "path";

const dirname = path.resolve('./');
```

This will find the path to where you launch your node project.

If you are using subpath, you don't have to specify the directory name, it will use the name of the subpath.

### First part

```javascript
app.get('/', function (req, res) {
  angularServer.siteSlash(req, res, Link, dirname + '/directoryName');
});
```

### Second part

```javascript
app.get('/*', function (req, res) {
  angularServer.siteRest(req, res, Link, dirname + '/directoryName');
});
```

### Subpath

You can also use this package with subpath.

```javascript
app.get('/subpath', function (req, res) {
  angularServer.siteSlash(req, res, Link, dirname);
});

app.get('/subpath/*', function (req, res) {
  angularServer.siteRest(req, res, Link, dirname);
});
```

## For support

<a href="https://www.buymeacoffee.com/nicolegrimpeur" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
