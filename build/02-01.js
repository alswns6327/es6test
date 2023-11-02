"use strict";

var msg = "World";
console.log("hi ".concat(msg));
(function () {
  return msg;
})();
var a = function a() {
  for (var _len = arguments.length, a = new Array(_len), _key = 0; _key < _len; _key++) {
    a[_key] = arguments[_key];
  }
  return a;
};
var b = function b(a) {
  return a;
};