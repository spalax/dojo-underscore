define(["underscore/underscore"], function() {
    var u = _;
    window && window._ && delete window['_'];
    return u;
});
