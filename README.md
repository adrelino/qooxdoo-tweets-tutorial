# qooxdoo "tweets" with [qxcompiler](https://github.com/johnspackman/qxcompiler) and [grunt-qxcompiler](https://github.com/drawstack/grunt-qxcompiler)

This is the tweets application from the offical Qooxdoo [tutorial](http://www.qooxdoo.org/current/pages/desktop/tutorials/tutorial-part-1.html), its also here as an
example for an app with QxCompiler and grunt-qxcompiler.

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

#### Clone and checkout a special version of qooxdoo

```bash
git clone https://github.com/johnspackman/qooxdoo.git
cd qooxdoo
git checkout -b qxcompiler-master-v2 origin/qxcompiler-master-v2
cd ..
```

#### Set your QOOXDOO_PATH as env var

```bash
export QOOXDOO_PATH=$PWD/qooxdoo
```

#### Compile it

```bash
grunt qxcompiler:source
```

#### Open in browser

```bash
xdg-open ./build/source/tweets.html
```

### Develop it

We added `grunt-contrib-watch` which means it will rebuild your Qx app on-to-fly.

Just run:

```
grunt watch
```

### License

MIT
