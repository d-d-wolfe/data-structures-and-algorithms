'use strict';

const Hash = require('../hashtable/hashtable.js');
const join = require('./left-join.js');

let leftTable = new Hash.HashMap(5);
let rightTable = new Hash.HashMap(5);

leftTable.add('fond', 'enamored');
leftTable.add('wrath', 'anger');
leftTable.add('diligent', 'employed');
leftTable.add('outfit', 'garb');
leftTable.add('guide', 'usher');

rightTable.add('fond', 'averse');
rightTable.add('wrath', 'delight');
rightTable.add('diligent', 'idle');
rightTable.add('guide', 'follow');
rightTable.add('flow', 'jam');


describe('Tests the leftJoin function', () => {
  it('should return the keys and values from the left table and the values from the right table, or NULL if no matching value', () => {
    
    expect(join(leftTable, rightTable)).toEqual(
      [
        ['fond', 'enamored', 'averse'],
        ['wrath', 'anger', 'delight'],
        ['diligent', 'employed', 'idle'],
        ['outfit', 'garb', null],
        ['guide', 'usher', 'follow']
      ]
    );
  });
});