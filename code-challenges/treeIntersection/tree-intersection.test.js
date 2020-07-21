'use strict';

const interTree = require('./tree-intersection.js');

const tree1 = new interTree.Tree;
const tree2 = new interTree.Tree;

tree1.root = new interTree.Node(150);
tree1.root.left = new interTree.Node(100);
tree1.root.left.left = new interTree.Node(75);
tree1.root.left.right = new interTree.Node(160);
tree1.root.left.right.left = new interTree.Node(125);
tree1.root.left.right.right = new interTree.Node(175);
tree1.root.right = new interTree.Node(250);
tree1.root.right.left = new interTree.Node(200);
tree1.root.right.right = new interTree.Node(350);
tree1.root.right.right.left = new interTree.Node(300);
tree1.root.right.right.right = new interTree.Node(500);

tree2.root = new interTree.Node(42);
tree2.root.left = new interTree.Node(100);
tree2.root.left.left = new interTree.Node(15);
tree2.root.left.right = new interTree.Node(160);
tree2.root.left.right.left = new interTree.Node(125);
tree2.root.left.right.right = new interTree.Node(175);
tree2.root.right = new interTree.Node(600);
tree2.root.right.left = new interTree.Node(200);
tree2.root.right.right = new interTree.Node(350);
tree2.root.right.right.left = new interTree.Node(4);
tree2.root.right.right.right = new interTree.Node(500);

let tree3 = new interTree.Tree;
let tree4 = new interTree.Tree;

tree3.root = new interTree.Node(345);
tree3.root.left = new interTree.Node(1435);
tree3.root.left.left = new interTree.Node(7542);
tree3.root.left.right = new interTree.Node(733);
tree3.root.left.right.left = new interTree.Node(8653);
tree3.root.left.right.right = new interTree.Node(23456212);
tree3.root.right = new interTree.Node(4527);
tree3.root.right.left = new interTree.Node(2345);
tree3.root.right.right = new interTree.Node(1234);
tree3.root.right.right.left = new interTree.Node(7524);
tree3.root.right.right.right = new interTree.Node(8563);

tree4.root = new interTree.Node(23234);
tree4.root.left = new interTree.Node(145);
tree4.root.left.left = new interTree.Node(6245);
tree4.root.left.right = new interTree.Node(6783);
tree4.root.left.right.left = new interTree.Node(23465);
tree4.root.left.right.right = new interTree.Node(47357);
tree4.root.right = new interTree.Node(234);
tree4.root.right.left = new interTree.Node(745);
tree4.root.right.right = new interTree.Node(2346);
tree4.root.right.right.left = new interTree.Node(457);
tree4.root.right.right.right = new interTree.Node(2);

describe('Testing the tree intersection function', () => {
  it('should return an array with intersecting numbers from 2 trees', () => {
  expect(interTree.treeIntersection(tree1, tree2)).toStrictEqual([100,160,125,175,200,350,500]);  
  });
  it('should return a message with no intersecting values', () => {
    expect(interTree.treeIntersection(tree3, tree4)).toStrictEqual('No matching values');
  });
});
