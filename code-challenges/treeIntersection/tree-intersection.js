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
    this.allValArr = [];
    this.allValObj = {};

  }



  preOrderPush(root) {
    this.allValArr.push(root.value);
    this.allValObj[root.value] = 'match';
    if(root.left !== null) {
      this.preOrderPush(root.left);
    }
    if(root.right !== null) {
      this.preOrderPush(root.right);
    }
    return this.allValArr
  }
};  

function treeIntersection(tree1, tree2) {
  let arr1 = [...tree1.preOrderPush(tree1.root)];
  tree2.preOrderPush(tree2.root);
  let obj2 = tree2.allValObj;
  let values = [];
  let validate = false;
  for(let i = 0; i < arr1.length; i++) {
    if (obj2[arr1[i]] === 'match') {
      validate = true;
      values.push(arr1[i]);
    }
  }
  if(validate === false) {
    return 'No matching values';
  } else {

    return values;
  }
}



module.exports = {
  Node,
  Tree,
  treeIntersection,
};

