'use strict';

const HashMap = require('../hashtable/hashtable.js');

/*
leftTable.add('fond', 'enamored');
leftTable.add('wrath', 'anger');
// leftTable.add('diligent', 'employed');
leftTable.add('outfit', 'garb');
leftTable.add('guide', 'usher');

rightTable.add('fond', 'averse');
rightTable.add('wrath', 'delight');
// rightTable.add('diligent', 'idle');
rightTable.add('guide', 'follow');
rightTable.add('flow', 'jam');

left table = [
  ['fond', enamored'],
  ['wrath', 'anger'],
  ['outfit', 'garb'],
  [guide, usher]
]

right table = [
  [fond, averse],
  [wrath, delight],
  [guide, follow],
  [flow, jam]
]

*/

function leftJoin(left, right) {
  let results = [];
  let buckets = left.buckets;
  console.log('buckets', buckets);
  for (let i = 0; i < buckets.length; i++) {
      console.log(buckets[i]);
    if (buckets[i]) {

      let key = Object.keys(buckets[i].head.value)[0];
      let val = Object.values(buckets[i].head.value)[0];
      let val2 = right.get(key)[0];
      results.push([key, val, val2]);
      console.log(results);
    }
  }
  
  return results;
}

let left = new HashMap.HashMap(10);
let right = new HashMap.HashMap(10);

left.add('fond', 'enamored');
right.add('fond', 'averse');
left.add('wrath', 'anger');
right.add('wrath', 'delight');
left.add('diligent', 'employed');
right.add('diligent', 'idle');
left.add('outfit', 'garb');
right.add('guide', 'follow');
left.add('guide', 'usher');
right.add('flow', 'jam');

console.log('left and right', left, right);
console.log('join', leftJoin(left, right));

module.exports = leftJoin;
