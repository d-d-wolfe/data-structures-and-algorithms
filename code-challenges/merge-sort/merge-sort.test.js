'use strict';

const sort = require('./merge-sort.js');

describe('Testing merge sort', ()=> {
  it('should return an array sorted in ascending order', () => {
    expect(sort([8,4,23,42,16,15])).toEqual([4,8,15,16,23,42])
  });
});
