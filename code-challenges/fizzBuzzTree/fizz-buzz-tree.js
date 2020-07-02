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
    console.log(root.value);

    for (let i = 0; i < root.child.length; i++) {
      if (root.child[i] !== null) {
        this.preOrder(root.child[i]);
      }
    }
  }
}

let newTree = new Ktree();
newTree.root = new Node(1);
newTree.root.child[0] = new Node(2);
newTree.root.child[1] = new Node(3);
// newTree.root.child.child[0] = new Node(4);
// newTree.root.child.child[1] = new Node(5);

console.log(newTree);
