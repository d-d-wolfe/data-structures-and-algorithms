'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.Top = null;
  }
  peek() {
    return this.Top.value;
  }

  push(value) {
    let newNode = new Node(value);

    newNode.next = this.Top;
    this.Top = newNode;
  }

  pop() {
    if (this.top === null) {
      return ('The stack is empty, nothing to remove.');
    }
    let value = this.Top;
    this.Top = this.Top.next;
    value.next = null;
    return value;
  }
}

class PseudoQueue {
  constructor () {
    this.front = null;
    this.rear = null;
  }
  enqueue(value) {
    let newStack = new Stack(value);
    if (this.rear) {
      this.rear.next = newStack;
    } else {
      this.front = newStack;
    }
    this.rear = newStack;
  }

  dequeue() {
    let removed = this.front.value;
    this.front = this.front.next;
    return removed;
  }
}