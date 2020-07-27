'use strict';

const Graph = require('../graph.js');
const bf = require('./breadth-first.js');

describe('Testing the breadth first graph traversal method', () => {
  it('should return all of the nodes in the graph', () => {
    const graph = new Graph();

    const one = graph.addNode(1);
    const two = graph.addNode(2);
    const four = graph.addNode(4);
    const six = graph.addNode(6);
    const seven = graph.addNode(7);
    const eight = graph.addNode(8);

    graph.addEdge(one, four);
    graph.addEdge(one, two);
    graph.addEdge(two, four);
    graph.addEdge(four, six);
    graph.addEdge(six, eight);
    graph.addEdge(six, seven);

  expect(bf(one)).toMatchSnapshot();
  });

  it('should return all the nodes in the graph from a different starting point', () => {
    const graph = new Graph();

    const one = graph.addNode(1);
    const two = graph.addNode(2);
    const four = graph.addNode(4);
    const six = graph.addNode(6);
    const seven = graph.addNode(7);
    const eight = graph.addNode(8);

    graph.addEdge(one, four);
    graph.addEdge(one, two);
    graph.addEdge(two, four);
    graph.addEdge(four, six);
    graph.addEdge(six, eight);
    graph.addEdge(six, seven);

    expect(bf(four)).toMatchSnapshot();
  });
});
