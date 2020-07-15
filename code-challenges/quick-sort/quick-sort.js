'use strict';

function quickSort(arr) {

  if (arr.length < 1) {
    return arr;
  } else {
    let left = [];
    let right = [];
    let newArr = [];
    let pivot = arr.pop();

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return newArr.concat(quickSort(left), pivot, quickSort(right));
  }
}

const myArr = [8,4,23,42,16,15];

console.log(quickSort(myArr));

module.exports = quickSort;
