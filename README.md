This project provides wrapper for [Underscore.js](http://underscorejs.org/) to use with dojo toolkit AMD.
This wrapper defines underscore.js and removes "_" from global namespace.

The dojo-underscore project is available under the MIT license.

# Installation

## Wrappers

 [Underscore.js](http://underscorejs.org/)
 [Undersocre.string.js](https://github.com/epeli/underscore.string)

## Automatic Download with Bower

dojo-underscore can be installed via [Bower](https://github.com/bower/bower)
using the following command:

    bower install dojo-underscore

## Getting Started

Just include dojo-underscore in your AMD dojo module.

to use underscore js:
```
define(["dojo-underscore/underscore"], function (u) {
    // Here you will have all underscore functionality under "u" variable
})
```

to use underscore string plugin:
```
define(["dojo-underscore/string"], function (str) {
    // Here you will have all string functionality under "str" variable
})
```
