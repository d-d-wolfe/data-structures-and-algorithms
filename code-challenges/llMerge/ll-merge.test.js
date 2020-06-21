'use strict';

const linkedList = require('./ll-merge.js');

const firstLinkedList = new linkedList.LinkedList();
const secondLinkedList = new linkedList.LinkedList();
const mergeList = new linkedList.LinkedList();

firstLinkedList.insert('2');
firstLinkedList.insert('3');
firstLinkedList.insert('1');

secondLinkedList.insert('4');
secondLinkedList.insert('9');
secondLinkedList.insert('5');


describe('Testing Merged Linked Lists', () => {
  it('Should zipper two linked lists together by taking in 3 linked list variables', () => {
    // console.log(linkedList.mergeLists());
    expect(linkedList.mergeLists(firstLinkedList, secondLinkedList).toString()).toStrictEqual(`{4} -> {2} -> {9} -> {3} -> {5} -> {1} -> NULL`);
  });
});

