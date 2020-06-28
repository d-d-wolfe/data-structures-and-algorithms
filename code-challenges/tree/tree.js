'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  preOrder(root) {
    // console.log(root.value);
    if (root.left !== null) {
      this.preOrder(root.left);
    }
    if (root.right !== null) {
      this.preOrder(root.right);
    }
  }

  inOrder(root) {
    if (root.left !== null) {
      this.inOrder(root.left);
    }
    // console.log(root.value);

    if (root.right !== null) {
      this.inOrder(root.right);
    }

    if (root === null) {
      console.log('Error with inOrder');
    }
  }

  postOrder(root) {
    if (root.left !== null) {
      this.postOrder(root.left);
    }
    if (root.right !== null) {
      this.postOrder(root.right);
    }
    if (root === null) {
      console.log('Error with postOrder');
    }
  }

  add(value) {
    let newNode = new Node(this.value);

    if (this.root.left !== null) {
      if (this.root.value === newNode.value) {
        let temp = this.root.value;
        this.root.value = newNode.value;
        newNode.left = temp;
      } else {
        this.preOrder(this.root.left);
      }
    }
    if (this.root.right !== null) {
      if (this.root.value === value) {
        let temp = this.root.value;
        this.root.value = newNode.value;
        newNode.right = temp;
      } else {
        this.preOrder(this.root.right);
      }
    }
  }

  contains(value) {
    let current = false;
    if (this.root.left !== null) {
      if (this.root.value === value) {
        current = true;
      } else {
        this.preOrder(this.root.left);
      }
    }

    if (this.root.right !== null) {
      if (this.root.value === value) {
        current = true;
      } else {
        this.preOrder(this.root.right);
      }
    }
    return current;
  }
}

let tree = new Tree();
let node = new Node();

tree.root = tree.add(1);
tree.root.left = node(2);
// tree.root.right = tree.node(3);
// tree.root.left.left = tree.node(4);
// tree.root.left.right = tree.node(5);


tree.preOrder(tree.root);

console.log(tree);



module.exports = {
  Node,
  Tree,
};
