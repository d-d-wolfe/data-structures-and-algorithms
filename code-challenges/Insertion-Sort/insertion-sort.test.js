'use strict';

const newSort = require('./insertion-sort.js');

describe('Tests the insertion sort function', () => {
  it('should return the array sorted from smallest to largest', () => {
    // let sort = newSort.insertionSort();
    expect(newSort([8,4,23,42,16,15])).toEqual([4,8,15,16,23,42])
  });
});
