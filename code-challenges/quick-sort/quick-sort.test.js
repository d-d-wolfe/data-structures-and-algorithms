'use strict';

const sort = require('./quick-sort.js');

describe('Tests the quick sort function', () => {
  it('should return a new array with the numbers sorted in ascending order', () => {
    const myArr = [8,4,23,42,16,15];
    expect(sort(myArr)).toEqual([ 4, 8, 15, 16, 23, 42 ])
  });
});