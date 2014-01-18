define(["underscore/underscore"], function() {
    var u = _;
    window._ && delete window['_'];
    return u;
});
