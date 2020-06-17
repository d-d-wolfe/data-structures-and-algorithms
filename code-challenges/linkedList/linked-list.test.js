'use strict';

let linkedList = require('./linked-list');

describe('Test initial list instantiation', () => {
  it('should return an empty list', () => {
    let list = new linkedList.LinkedList();

    expect(list.head).toBe(null);
  });
});

describe('Tests the insert function', () => {
  it('should return a new object at the head', () => {
    let list = new linkedList.LinkedList();
    list.insert('First Value');

    expect(list.head.value).toBe('First Value');
  });
});

describe('Test to make sure that the head is always the newest instance in the list', () => {
  it('should return the most recent item inserted', () => {
    let list = new linkedList.LinkedList();
    list.insert('First Value');
    list.insert('Second Value');

    expect(list.head.value).toBe('Second Value');
  });
});

describe('Test to make sure we can return a string of the values added', () => {
  it('should return a list of the values', () => {
    let list = new linkedList.LinkedList();
    list.insert('First Value');
    list.insert('Second Value');
    list.insert('Third Value');
    list.insert('Fourth Value');
    let results = list.toString(list);

    expect(list.toString(list)).toBe(results);
  });
});

describe('Test to make sure that the includes function works', () => {
  it('should return true if a value is included', () => {
    let list = new linkedList.LinkedList();
    list.insert('First Includes Value');
    list.insert('Second Includes Value');
    list.insert('Third Includes Value');
    list.insert('Fourth Includes Value');

    expect(list.include('Fourth Includes Value')).toBe(true);
    expect(list.include('Third Includes Value')).toBe(true);
    expect(list.include('Second Includes Value')).toBe(true);
    expect(list.include('First Includes Value')).toBe(true);
    expect(list.include('Does Not Include')).toBe(false);
    expect(list.include(5)).toBe(false);
  });
});

describe('Test to make sure that the append function puts a new node at the end of the list', () => {
  it('should return the new value at the end of the list', () => {
    let list = new linkedList.LinkedList();

    list.append(1);
    list.append(3);
    list.append(2);
    list.append(5);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(3);
    expect(list.head.next.next.value).toEqual(2);
    expect(list.head.next.next.next.value).toEqual(5);

  });
});

describe('Test to make sure that the insertBefore function works', () => {
  it('should return the new value before the stated value', () => {
    let list = new linkedList.LinkedList();

    list.append(1);
    list.append(3);
    list.append(2);
    list.insertBefore(3, 5);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(5);
    expect(list.head.next.next.value).toEqual(3);
    expect(list.head.next.next.next.value).toEqual(2);
  });
});

describe('Test to make sure that the insertAfter function works', () => {
  it('should return the new value after the stated value', () => {
    let list = new linkedList.LinkedList();

    list.append(1);
    list.append(3);
    list.append(2);
    list.insertAfter(3, 5);
    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(3);
    expect(list.head.next.next.value).toEqual(5);
    expect(list.head.next.next.next.value).toEqual(2);
  });
});

describe('Test to make sure that I can find the value of k from the end of the linked list', () => {
  it('should return the nth value', () => {
    let list = new linkedList.LinkedList();

    list.append(1);
    list.append(3);
    list.append(8);
    list.append(2);
    list.searchNode(2)
    expect().toEqual(2);
    // expect(searchNode(2)).toEqual(3);
    // expect(searchNode(6)).toEqual(undefined);
  });
});



