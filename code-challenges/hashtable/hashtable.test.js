'use strict';

const hash = require('./hashtable.js');

let newHash = new hash.HashMap(5);

newHash.add('holy', 'cow');
newHash.add('holy', 'horse');
newHash.add('Donald', 'duck');
newHash.add('snoopy', 'dog');
newHash.add('Dave', 'is awesome');

describe('Testing Hash Tables and methods', () => {
  it('should add a new item to the hash table', () => {
    newHash.add('test1', 'value1');
    expect(newHash.contains('test1')).toBe(true);
  });

  it('should return the value of the object', () => {
    expect(newHash.get('holy')).toStrictEqual([ 'cow', 'horse' ]);
    expect(newHash.get('Donald')).toStrictEqual([ 'duck' ]);
  });
});
