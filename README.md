# Polymer-Flux

This is an attempt to make a [Polymer](https://www.polymer-project.org) application
using the [Flux](https://facebook.github.io/flux/) architecture. [Backbone.js](http://backbonejs.org/)
will be used for the stores.

Based on the [`unquote` Polymer post cards tutorial](https://github.com/Polymer/polymer-tutorial).

## Demo

You can see it working [on your browser](https://vnen.github.io/polymer-flux).

## Running

You'll need [Bower](http://bower.io) to download dependencies:

```shell
git clone https://github.com/vnen/polymer-flux.git
cd polymer-flux
bower install
```

Then you'll need a server, because HTML imports does not work with the `file://` protocol for security reasons.
I find it simpler to use Python server:

```shell
python -m SimpleHTTPServer
```

If you have Python 3.x:

```shell
python -m http.server
```

## Author

Created and mantained by [George Marques](http://georgemarques.com.br).

## License

[MIT](LICENSE)