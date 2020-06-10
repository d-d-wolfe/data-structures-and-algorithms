'use strict';

function insertShiftArray(arr, val) {
  val = 0;
  var middle = arr[Math.floor((arr.length - 1) / 2)];
  arr.splice(middle, 0, val);
  return arr;
}

module.exports = insertShiftArray;
