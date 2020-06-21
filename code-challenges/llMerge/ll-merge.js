'use strict';

class LinkedList {
  constructor() {
    this.head = null;
  }

  traverse() {
    let current = this.head;

    while (current) {
      // console.log(current.value);
      current = current.next;
    }
  }

  insert(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }

  toString() {
    let stringOut = '';
    let current = this.head;
    while (current) {
      stringOut += (`{${current.value}} -> `);
      current = current.next;
    }

    if (!current) {
      stringOut += ('NULL');
    }
    console.log(stringOut);
    return stringOut;
  }

  include(value) {
    let current = this.head;
    let valid = false;

    while (current) {
      if (current.value === value) {
        valid = true;
        break;
      } else {
        current = current.next;
      }
    }
    return valid;
  }

  append(value) {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }
    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = new Node(value);
  }
  insertBefore(value, newValue) {
    let newNode = new Node(newValue);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;

    while (current.next) {
      if (value === current.next.value) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  }
  insertAfter(value, newValue) {
    let newNode = new Node(newValue);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;

    while (current.value) {
      if (value === current.value) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
  }

  deleteNode(delVal) {
    let current = this.head;

    while (current.next) {
      if (current.value === delVal) {
        current.next === current.next.next;

        return this.head;
      }
      current = current.next;
    }
    return this.head;
  }

  thisValue(idx) {
    let current = this.head;
    let i = 0;

    const a = [];
    while (current) {
      if (i === idx) {
        a.push(current.value);
      }
      i++;
      current = current.next;
    }
    return a[0];
  }

  counter() {
    let current = this.head;
    let i = 0;
    while (current) {
      i++;
      current = current.next;
    }
    return i;
  }

  searchNode(nth) {
    let current = this.head;
    let k = this.counter() - (nth);
    let j = 0 + k - 1;
    let i = 0;

    while (current) {
      if (i === j || j === -1) {
        // console.log('this is value', current.value);
      }
      i++;
      current = current.next;
    }
  }
}
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
const firstLinkedList = new LinkedList();
const secondLinkedList = new LinkedList();

firstLinkedList.insert('2');
firstLinkedList.insert('3');
firstLinkedList.insert('1');

secondLinkedList.insert('4');
secondLinkedList.insert('9');
secondLinkedList.insert('5');

function mergeLists(l1, l2) {
  let myMergeList = new LinkedList();
  let j = 0;
  let k = 0;
  let a = 0;
  for (let i = 0; i < (l1.counter() + l2.counter()); i++) {
    if (a === 0) {
      myMergeList.insert(l1.thisValue(j));
      a = 1;
      j++;
    } else if (a === 1) {
      myMergeList.insert(l2.thisValue(k));
      a = 0;
      k++;
    }
  }
  console.log(myMergeList);
  return myMergeList;

}
let testList = mergeLists(firstLinkedList, secondLinkedList);
testList.toString();


module.exports = {
  Node,
  LinkedList,
  mergeLists,
};
