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
      this.head = null;
      return;
    }
    let current = this.head;
    console.log(current);
    console.log('value', value); // value = 5

    while (current.next) {
      current = current.next;
    }
    current.next = new Node(value);
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


