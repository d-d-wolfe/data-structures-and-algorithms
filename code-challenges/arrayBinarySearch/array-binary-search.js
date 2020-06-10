'use strict';

function binarySearch(arr, key) {
  let position = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      position = i;
      break;
    }
  }
  return position;
}

module.exports = binarySearch;
