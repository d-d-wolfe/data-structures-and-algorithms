'use strict';

const shiftArray = require('./array-shift.js');

describe('testing shift function', () => {
  it('can shift contents of array', () => {
    let arr = [1, 2, 3, 4, 5, 6];
    let expected = shiftArray(arr);
    expect([1, 2, 3, 0, 4, 5, 6]).toEqual(expected);
  });
});
