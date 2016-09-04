# qooxdoo "tweets" with [qxcompiler](https://github.com/johnspackman/qxcompiler) and [grunt-qx](https://github.com/drawstack/grunt-qx)

This is the tweets application from the offical Qooxdoo [tutorial](http://www.qooxdoo.org/current/pages/desktop/tutorials/tutorial-part-1.html), its also here as an
example for an app with QxCompiler and grunt-qx.

### Install

#### Clone

```bash
$ git clone https://github.com/pcdummy/qooxdoo-tweets-tutorial.git
```

#### Run npm install

```bash
$ cd qooxdoo-tweets-tutorial
$ npm install
```

### Compile, serve with grunt-contrib-connect and watch it :)

```bash
grunt source-server
```

Next go to http://127.0.0.1:8000/qxc.tweets.html

```bash
xdg-open http://127.0.0.1:8000/qxc.tweets.html
```

### Develop it

We added `grunt-contrib-watch` which means it will rebuild your Qx app on-to-fly.

Just run:

```
grunt watch
```

### Available grunt tasks

#### source-server

Builds the "source" version of the tweets app, runs a server and rebuilds on-to-fly.

#### source-hybrid-server

Builds the "hybrid" version of the tweets app, runs a server and rebuilds on-to-fly.

#### build-server

Builds the "build" version of the tweets app, runs a server and rebuilds on-to-fly.

#### build

Builds the "build" version of the tweets app.

#### source-hybrid

Builds the "hybrid" version of the tweets app.

#### source

Builds the "source" version of the tweets app.

#### lint

Lints your code with eslint.

#### lint-fix

Lints your code with eslint and applies eslint fixes.

#### clean

Remove all builds.


### Update qx and the tools

Install [npm-check-updates](https://www.npmjs.com/package/npm-check-updates)

```bash
$ npm install -g npm-check-updates
```

Run npm-check-updates:
```bash
$ ncu -a
```

And update your packages:
```bash
$ npm update
```


### License

MIT
