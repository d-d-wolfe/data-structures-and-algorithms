'use strict';

class LinkedList {
  constructor() {
    this.head = null;
  }

  traverse() {
    let current = this.head;

    while (current) {
      console.log(current.value);
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
    while(current) {
      console.log(`{${current.value}} ->`);
      current = current.next;
      if (!current) {
        console.log('NULL');
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


