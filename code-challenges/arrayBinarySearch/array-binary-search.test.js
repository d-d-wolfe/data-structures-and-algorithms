'use strict';

const binarySearch = require('./array-binary-search.js');

describe('Testing binary search function', () => {
  it('finds the index of the value of key', () => {
    const arr1 = [4,8,15,16,23,42];
    const key1 = 15;
    let binaryValue1 = binarySearch(arr1, key1);

    expect(binaryValue1).toStrictEqual(2);

  });
});

describe('Testing binary search function', () => {
  it('returns negative index if key is not in the array', () => {
    const arr2 = [11,22,33,44,55,66,77];
    const key2 = 90;
    const binaryValue2 = binarySearch(arr2, key2);

    expect(binaryValue2).toStrictEqual(-1);
  });
});

