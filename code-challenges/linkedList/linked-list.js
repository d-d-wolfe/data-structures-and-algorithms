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
        console.log(current);
        current.next = newNode;
        return;
      }
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




module.exports = {
  Node,
  LinkedList,
};


