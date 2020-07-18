'use strict';

/*
  Node and Linked List classes for use within hash structures
*/
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}

class HashMap {

  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let charArray = key.split('');
    let hashSum = charArray.reduce((total, char) => {
      return total + char.charCodeAt(0);
    }, 0) * 599;
    let HashIndex = hashSum % this.size;
    return HashIndex;
  }

  add(key, value) {
    let hash = this.hash(key);
    if (!this.buckets[hash]) {
      this.buckets[hash] = new LinkedList();
    }

    // this is important based on your langauges capapbilities.
    let entry = { [key]: value };

    // dynamically add it to our linked list
    this.buckets[hash].add(entry);
  }

  get(key) {
    let index = this.getIndex(key);
    let list = this.buckets[index];
    if (!list) {
      return null;
    }
    let current = list.head;
    let arr = [];
    while (current) {
      let currKey = Object.keys(current.value);

      if (currKey[0] === key) {
        let curVal = Object.values(current.value);
        arr.push(curVal[0]);
      } 
        current = current.next;
    }
    return arr;
  }

  getIndex(key) {
    let indexHash = this.hash(key);
    let index = indexHash % this.buckets.length;
    return index;
  }

  contains(key) {
    let index = this.getIndex(key);
    let list = this.buckets[index];
    if (!list) {
      return false;
    }
    let current = list.head;
    let valid = false;
    let curKey = Object.keys(current.value);

    while (current) {
      if (curKey[0] === key) {
        valid = true;
        break;
      } else {
        current = current.next;
      }
    }
    return valid;
  }
  }




let map = new HashMap(1024);
map.add("Jacob", "instructor");
map.add("Jacob", "awesome");
map.add('Alistair', 'ta');

map.buckets.forEach((bucket, index) => {
  console.log(index, bucket.values());
});

console.log(map.get("Jacob"));

console.log(map.contains("Jacob"));

module.exports = {
  HashMap,
  LinkedList,
  Node,
}