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
    let current = this.head;
    while (current) {
      // console.log(`{${current.value}} ->`);
      current = current.next;
      if (!current) {
        // console.log('NULL');
      }
    }
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
      if (current.value ===delVal) {
        current.next === current.next.next;

        return this.head;
      }
      current = current.next;
    }
    return this.head;
  }

  counter() {
    let current = this.head;
    let i = 0;
    while(current) {
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

    let a = [];

    while (current) {
      if (i === j) {
        a.push(current.value);
      }
      i++;
      current = current.next;
    }
    return a[0];
  }
}
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }


}




module.exports = {
  Node,
  LinkedList,
};


