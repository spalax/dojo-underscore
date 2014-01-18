define(["underscore.string/lib/underscore.string"], function() {
    var str = _.str;
    window && window._ && delete window['_'];
    return str;
});
