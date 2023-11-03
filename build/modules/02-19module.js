"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mul = exports["default"] = exports.add = void 0;
var base = 100;
var add = exports.add = function add(x) {
  return base + x;
};
var mul = exports.mul = function mul(x) {
  return base * x;
};
var getBase = function getBase() {
  return base;
};
var setBase = function setBase(x) {
  return base = x;
};
var _default = exports["default"] = getBase;