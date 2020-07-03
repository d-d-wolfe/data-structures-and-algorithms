'use strict';

class Node {
  constructor (value) {
    this.value = value;
    this.child = [];
  }
}

class Ktree {
  constructor (){
    this.root = null;
  }

  preOrder(root) {
    let x =[];
    x.push(root.value);

    for (let i = 0; i < root.child.length; i++) {
      if (root.child[i] !== null) {
        x.push(this.preOrder(root.child[i]));
      }
    }
    return x;
  }

  fizzBuzz(root) {
    let newTree = new Ktree();

    if (root.value % 3 === 0) {
      newTree = new Node('fizz');
    }
    if (root.value % 5 === 0) {
      newTree = new Node('buzz');
    }
    if (root.value % 5 === 0 && root.value % 3 === 0) {
      newTree = new Node('FizzBuzz');
    }
    if (root.value % 3 !== 0 && root.value % 5 !== 0) {
      newTree = new Node(`${root.value}`);
    }
    for (let i = 0; i < root.child.length; i++) {
      if (root.child[i] !== null) {
        newTree.child[i] = this.fizzBuzz(root.child[i], newTree.child[i]);
      }
    }
    return newTree;
  }
}

let newTree = new Ktree();
newTree.root = new Node(1);
newTree.root.child[0] = new Node(15);
newTree.root.child[1] = new Node(3);
newTree.root.child[0].child[0] = new Node(4);
newTree.root.child[1].child[1] = new Node(5);
newTree.root.child[0].child[1] = new Node(6);
newTree.root.child[1].child[0] = new Node(7);

console.log(newTree.preOrder(newTree.fizzBuzz(newTree.root)));

module.exports = {
  Node,
  Ktree
};
