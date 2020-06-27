'use strict';

const test = require('./tree.js');
// let node = require('./tree.js');

describe('Tests traversal of a tree structure', () => {
  it('should return the initial tree structure', () => {
    let tree = new test.Tree();
    tree.root = new test.Node(1);
    tree.root.left = new test.Node (2);
    tree.root.right = new test.Node(3);
    tree.root.left.left = new test.Node(4);
    tree.root.left.right = new test.Node(5);

    expect(tree.preOrder(tree.root)).toEqual(1, 2, 4, 5, 3);
  });

});
