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

  insert() {

  }

  toString() {

  }

  includes() {

  }
}


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const linkedList = new LinkedList();
const firstNode = new Node('some-info');
const secondNode = new Node('second-info');
const thirdNode = new Node('third-info');

linkedList.head = firstNode;
linkedList.head.next = secondNode;
linkedList.head.next.next = thirdNode;

linkedList.traverse();




module.exports = {
  Node,
  LinkedList,
};


