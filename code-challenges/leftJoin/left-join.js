'use strict';

const HashMap = require('../hashtable/hashtable.js');

function leftJoin(left, right) {
  let results = [];
  let buckets = left.buckets;
  for (let i = 0; i < buckets.length; i++) {

    if (buckets[i]) {
      let key = Object.keys(buckets[i].head.value);
      let val = Object.values(buckets[i].head.value);
      let val2 = right.get(key[0]);
      results.push([key[0], val[0], val2]);
    }
  }
  console.log(results);
  return results;
}

module.exports = leftJoin;
