'use strict';

let newTree = require('./fizz-buzz-tree.js');

describe('Tests Fizz Buzz K-ary tree challenge', () => {
  it('Should return the tree values with "fizz" and "buzz" replacing numbers that are divisible by 3 and 5', () => {
    let tree = new newTree.Ktree();

    tree.root = new newTree.Node(1);
    tree.root.child[0] = new newTree.Node(15);
    tree.root.child[1] = new newTree.Node(3);
    tree.root.child[0].child[0] = new newTree.Node(4);
    tree.root.child[1].child[1] = new newTree.Node(5);
    tree.root.child[0].child[1] = new newTree.Node(6);
    tree.root.child[1].child[0] = new newTree.Node(7);

    expect(tree.preOrder(tree.fizzBuzz(tree.root))).toStrictEqual(['1',
      ['FizzBuzz', ['4'], ['fizz']],
      ['fizz', ['7'], ['buzz']]]);
  });
});
