'use strict';

let linkedList = require('./linked-list');

describe('Test initial list instantiation', () => {
  it('should return an empty list', () => {
    let list = new linkedList.LinkedList();
    expect(list.head).toBe(null);
  });
});
