'use strict';

const tree = require('./tree.js');

const test = new tree.Tree();

test.root = new tree.Node(1);
test.root.left = new tree.Node(2);
test.root.right = new tree.Node(3);
test.root.left.left = new tree.Node(4);
test.root.left.right = new tree.Node(5);



describe('Tests traversal of a tree structure', () => {
  it('should return an empty tree', () => {
    let newTree = new tree.Tree();
    expect(newTree.root).toBe(null);
  });

  it('will add Nodes to the tree', () => {
    let newTree = new tree.Tree();
    newTree.root = new tree.Node(1);
    newTree.root.left = new tree.Node(2);
    newTree.root.right = new tree.Node(3);
    expect(newTree.root.value).toBe(1);
    expect(newTree.root.left.value).toBe(2);
    expect(newTree.root.right.value).toBe(3);
  });

  // it('will test the preOrder traversal', () => {

  // })

});
