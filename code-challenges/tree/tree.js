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
    let returnArr = [];
    if (root === null) {
      console.log('Node is null');
    }
    else {
      returnArr.push(root.value);
      if (root.left !== null) {
        returnArr = returnArr.concat(this.preOrder(root.left));
      }
      if (root.right !== null) {
        returnArr = returnArr.concat(this.preOrder(root.right));
      }
    }
    return returnArr;
  }

  inOrder(root) {
    let returnArr = [];

    if (root === null) {
      console.log('Node is null');
    }
    else {

      if (root.left !== null) {
        returnArr = returnArr.concat(this.inOrder(root.left));
      }
      // console.log(root.value);
      returnArr.push(root.value);

      if (root.right !== null) {
        returnArr = returnArr.concat(this.inOrder(root.right));
      }
    }

    return returnArr;
  }

  postOrder(root) {

    let returnArr = [];

    if (root === null) {
      console.log('Node is null');
    }
    else {

      if (root.left !== null) {
        returnArr = returnArr.concat(this.postOrder(root.left));
      }
      // console.log(root.value);

      if (root.right !== null) {
        returnArr = returnArr.concat(this.postOrder(root.right));
      }
      returnArr.push(root.value);
    }

    return returnArr;
  }
}

class BinarySearchTree {
  constuctor() {
    this.root = null;
  }
  insert(root, value) {
    if (root === null || root === undefined) {
      root = new Node(value);
      return root;
    }
    if (value < root.value) {
      root.left = this.insert(root.left, value);
    }
    else if (value > root.value) {
      root.right = this.insert(root.right, value);
    }
    return root;
  }
  add(value) {
    this.root = this.insert(this.root, value);
  }
}

// contains(value) {

// }


let bst = new BinarySearchTree();

bst.add(8);
bst.add(3);
bst.add(10);

console.log(bst);

// tree.root = new Node(1);
// tree.root.left = new Node(2);
// tree.root.right = new Node(3);
// tree.root.left.left = new Node(4);
// tree.root.left.right = new Node(5);


// console.log(tree.postOrder(tree.root));



module.exports = {
  Node,
  Tree,
  BinarySearchTree,
};
