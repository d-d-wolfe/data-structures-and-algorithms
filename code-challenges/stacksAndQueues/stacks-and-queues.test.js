'use strict';

let stack = require('./stacks-and-queues');
let queue = require('./stacks-and-queues');

describe('Test initial stack instantiation and ability to push one value onto the stack', () => {
  it('should return an empty stack and then a value of 1 at the top', () => {
    let myStack = new stack.Stack();

    expect(myStack.Top).toBe(null);

    myStack.push(1);
    let top = myStack.Top;

    expect(top).not.toBe(undefined);
    expect(top.value).toBe(1);
    expect(top.next).toBe(null);
  });
});

describe('Testing the ability to push multiple values onto the stack', () => {
  it('should be able to have multiple values on the stack', () => {
    let myStack = new stack.Stack();
    myStack.push(1);
    myStack.push(2);
    myStack.push(3);
    myStack.push(4);
    let top = myStack.Top;
    expect(top.value).toBe(4);
    expect(top.next.value).toBe(3);
    expect(top.next.next.value).toBe(2);
    expect(top.next.next.next.value).toBe(1);
    expect(top.next.next.next.next).toBe(null);
  });
});

describe('Tests the ability to pop a value off the stack', () => {
  it('should pop the top value off the stack', () => {
    let myStack = new stack.Stack();
    myStack.push(1);
    myStack.push(2);
    myStack.push(3);
    myStack.push(4);
    let top = myStack.Top;

    expect(myStack.pop().value).toBe(4);
    top = myStack.Top;
    expect(top.value).toBe(3);
  });
});

describe('Tests the ability to empty a stack after multiple pops', () => {
  it('should pop all values off the stack', () => {
    let myStack = new stack.Stack();
    myStack.push(1);
    myStack.push(2);
    myStack.push(3);
    myStack.push(4);
    let top = myStack.Top;

    expect(myStack.pop().value).toBe(4);
    top = myStack.Top;
    expect(top.value).toBe(3);
    expect(myStack.pop().value).toBe(3);
    top = myStack.Top;
    expect(top.value).toBe(2);
    expect(myStack.pop().value).toBe(2);
    top = myStack.Top;
    expect(top.value).toBe(1);
    expect(myStack.pop().value).toBe(1);
    top = myStack.Top;
    expect(top).toBe(null);
  });
});

describe('Tests the ability to peek the next item in the stack', () => {
  it('should return the value of the peek', () => {
    let myStack = new stack.Stack();
    myStack.push(1);
    myStack.push(2);
    myStack.push(3);
    myStack.push(4);
    let top = myStack.Top;
    expect(myStack.peek()).toBe(top.value);
  });
});

describe('Test initial stack instantiation', () => {
  it('should return an empty stack', () => {
    let myStack = new stack.Stack();

    expect(myStack.Top).toBe(null);

  });
});

describe('Test to make sure that calling peek or pop on empty stack raises exception', () => {
  it('should throw an exception', () => {
    let exceptionThrown = false;
    let myStack = new stack.Stack();
    try {
      myStack.pop();
    } catch (ex) {
      exceptionThrown = true;
    }
    expect(exceptionThrown).toBe(true);

    exceptionThrown = false;
    try {
      myStack.peek();
    } catch (ex) {
      exceptionThrown = true;
    }
    expect(exceptionThrown).toBe(true);
  });
});

describe('Test initial queue instantiation and ability to enque one value into the queue', () => {
  it('should return an empty queue and then a value of 1 at the front', () => {
    let myQueue = new queue.Queue();

    expect(myQueue.rear).toBe(null);

    myQueue.enqueue(1);
    let front = myQueue.front;
    let rear = myQueue.rear;

    expect(front).not.toBe(null);
    expect(front.value).toBe(1);
    expect(rear.value).toBe(1);
  });
});

describe('Test ability to enqueue multiple values into the queue', () => {
  it('should return a queue with multiple values', () => {
    let myQueue = new queue.Queue();

    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);
    myQueue.enqueue(4);
    let front = myQueue.front;
    let rear = myQueue.rear;

    expect(front).not.toBe(null);
    expect(rear).not.toBe(null);
    expect(front.value).toBe(1);
    expect(front.next.value).toBe(2);
    expect(front.next.next.value).toBe(3);
    expect(rear.value).toBe(4);
  });
});

describe('Test ability to dequeue the front value out of the queue', () => {
  it('should return the value of the dequeue and the new front', () => {
    let myQueue = new queue.Queue();

    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);
    myQueue.enqueue(4);
    let front = myQueue.front;

    expect(myQueue.dequeue()).toBe(1);
    front = myQueue.front;
    expect(front.value).toBe(2);
  });
});

describe('Test ability to peek at the front value out of the queue', () => {
  it('should return the value of the front item in the queue', () => {
    let myQueue = new queue.Queue();

    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);
    myQueue.enqueue(4);

    expect(myQueue.peek()).toBe(1);
    let front = myQueue.front;
    expect(myQueue.front.value).toBe(1);

  });
});

describe('Test ability to empty the queue after multiple dequeues', () => {
  it('should return an empty queue after multiple dequeues', () => {
    let myQueue = new queue.Queue();

    myQueue.enqueue(1);
    myQueue.enqueue(2);
    myQueue.enqueue(3);
    myQueue.enqueue(4);
    let front = myQueue.front;

    expect(myQueue.dequeue()).toBe(1);
    front = myQueue.front;
    expect(front.value).toBe(2);
    expect(myQueue.dequeue()).toBe(2);
    front = myQueue.front;
    expect(front.value).toBe(3);
    expect(myQueue.dequeue()).toBe(3);
    front = myQueue.front;
    expect(front.value).toBe(4);
    expect(myQueue.dequeue()).toBe(4);
    front = myQueue.front;
    expect(front).toBe(null);
  });
});

describe('Test initial queue instantiation of an empty queue', () => {
  it('should return an empty queue', () => {
    let myQueue = new queue.Queue();

    expect(myQueue.rear).toBe(null);
    expect(myQueue.front).toBe(null);
  });
});

describe('Test to make sure that calling peek or dequeue on empty queue raises exception', () => {
  it('should throw an exception', () => {
    let exceptionThrown = false;
    let myQueue = new queue.Queue();
    try {
      myQueue.dequeue();
    } catch (ex) {
      exceptionThrown = true;
    }
    expect(exceptionThrown).toBe(true);

    exceptionThrown = false;
    try {
      myQueue.peek();
    } catch (ex) {
      exceptionThrown = true;
    }
    expect(exceptionThrown).toBe(true);
  });
});
