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

  it('will test the preOrder traversal', () => {
    let newTree = new tree.Tree();
    newTree.root = new tree.Node(1);
    newTree.root.left = new tree.Node(2);
    newTree.root.right = new tree.Node(3);
    newTree.root.left.left = new tree.Node(4);
    newTree.root.left.right = new tree.Node(5);

    expect(newTree.preOrder(newTree.root)).toEqual([1, 2, 4, 5, 3]);
  });

  it('will test the inOrder traversal', () => {
    let newTree = new tree.Tree();
    newTree.root = new tree.Node(1);
    newTree.root.left = new tree.Node(2);
    newTree.root.right = new tree.Node(3);
    newTree.root.left.left = new tree.Node(4);
    newTree.root.left.right = new tree.Node(5);

    expect(newTree.inOrder(newTree.root)).toEqual([4, 2, 5, 1, 3]);
  });
  it('should test the postOrder traversal', () => {
    let newTree = new tree.Tree();
    newTree.root = new tree.Node(1);
    newTree.root.left = new tree.Node(2);
    newTree.root.right = new tree.Node(3);
    newTree.root.left.left = new tree.Node(4);
    newTree.root.left.right = new tree.Node(5);

    expect(newTree.postOrder(newTree.root)).toEqual([4, 5, 2, 3, 1]);
  });

  it('should add values to the BST', () => {
    let bst = new tree.BinarySearchTree();

    bst.add(8);
    bst.add(3);
    bst.add(10);
    bst.add(1);
    bst.add(6);
    bst.add(14);

    expect(bst.root.value).toEqual(8);
    expect(bst.root.left.value).toEqual(3);
    expect(bst.root.right.value).toEqual(10);
    expect(bst.root.left.left.value).toEqual(1);
    expect(bst.root.left.right.value).toEqual(6);
    expect(bst.root.right.right.value).toEqual(14);
    expect(bst.root.right.left).toEqual(null);
  });

  it('should return true if a specified value is in the tree and false if the specified value is not in the tree', () => {
    let bst = new tree.BinarySearchTree();

    bst.add(8);
    bst.add(3);
    bst.add(10);
    bst.add(1);
    bst.add(6);
    bst.add(14);
    expect(bst.contains(10)).toEqual(true);
    expect(bst.contains(42)).toEqual(false);
  });

  it('should find the largest value in the tree', () => {
    let newTree = new tree.Tree();
    newTree.root = new tree.Node(1);
    newTree.root.left = new tree.Node(2);
    newTree.root.right = new tree.Node(3);
    newTree.root.left.left = new tree.Node(4);
    newTree.root.left.right = new tree.Node(5);

    expect(newTree.findMaxValue(newTree.root, 0)).toEqual(5);
  });

  it('should use the breadth first traversal method', () => {
    let newTree = new tree.Tree();
    newTree.root = new tree.Node(2);
    newTree.root.left = new tree.Node(7);
    newTree.root.right = new tree.Node(5);
    newTree.root.right.right = new tree.Node(9);
    newTree.root.right.right.left = new tree.Node(4);
    newTree.root.left.left = new tree.Node(2);
    newTree.root.left.right = new tree.Node(6);
    newTree.root.left.right.left = new tree.Node(5);
    newTree.root.left.right.right = new tree.Node(11);

    expect(newTree.breadthFirst(newTree.root)).toEqual([2, 7, 5, 2, 6, 9, 5, 11, 4]);
  });
});
