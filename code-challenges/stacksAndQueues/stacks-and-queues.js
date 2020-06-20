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
      return ('The stack is empty, nothing to remove.')
    }
    let value = this.Top;
    this.Top = this.Top.next;
    value.next = null;
    return value;
  }

  isEmpty() {
    return (this.top === null)

  }
}


let stack = new Stack;

stack.push(1);
stack.push(2);
stack.pop();

console.log(stack);

console.log(stack.peek());

console.log(stack.isEmpty());




module.exports = {
  stack: Stack,
  // queue: Queue,
};
