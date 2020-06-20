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

  onlyValues() {
    let current = this.top;

    let string = '';
    while (current) {
      string += ` { ${current.value} } `;
      current = current.next;
    }
    return string;
  }

  isEmpty() {
    return (this.top === null)
  }

  isEmpty() {
    return (this.top === null);

  }
}


let stack = new Stack;

stack.push(1);
stack.push(2);
stack.pop();

console.log(stack);

console.log(stack.peek());

console.log(stack.isEmpty());


class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (this.rear) {
      this.rear.next = newNode;
    } else {
      this.front = newNode;
    }
    this.rear = newNode;
  }

  dequeue() {
    let removed = this.front.value;
    this.front = this.front.next;
    return removed;
  }


  peek() {
    return this.front.value;
  }

  isEmpty() {
    return (this.front === null);
  }
}

let queue = new Queue;

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.dequeue();

console.log(queue);

console.log(queue.isEmpty());
console.log(queue.peek());





module.exports = {
  stack: Stack,
  queue: Queue,
};
