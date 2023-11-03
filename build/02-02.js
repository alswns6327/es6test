"use strict";

var msg = 'g';
function a() {
  var msg = 'o';
  console.log(msg);
  if (true) {
    var _msg = 'i1';
    console.log(_msg);
  }
  {
    var _msg2 = 'i2';
    console.log(_msg2);
  }
  console.log(msg);
}
a();