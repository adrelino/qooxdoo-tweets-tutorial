# qooxdoo "tweets" with [qxcompiler](https://github.com/johnspackman/qxcompiler) and [grunt-qx](https://github.com/drawstack/grunt-qx)

This is the tweets application from the offical Qooxdoo [tutorial](http://www.qooxdoo.org/current/pages/desktop/tutorials/tutorial-part-1.html), its also here as an
example for an app with QxCompiler and grunt-qx.

### Install

#### Clone

```bash
git clone https://github.com/pcdummy/qooxdoo-tweets-tutorial.git
```

#### Run npm install

```bash
cd qooxdoo-tweets-tutorial
npm install
```

#### Compile, serve with grunt-contrib-connect and watch it :)

```bash
grunt serve
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

### License

MIT
