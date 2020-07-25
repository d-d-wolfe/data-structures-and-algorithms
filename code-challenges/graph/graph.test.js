'use strict';

const Graph = require('./graph.js');

describe('Testing all the graph functionality', () => {
  it('Should create a graph with a node', () => {
    const graph = new Graph();
    graph.addNode(1);
    expect(graph).not.toBe(null);
  });

  it('should create a graph with multiple nodes and multiple edges', () => {
    const graph = new Graph();

    const one = graph.addNode(1);
    const two = graph.addNode(2);
    const three = graph.addNode(3);
    const four = graph.addNode(4);
    const five = graph.addNode(5);
    const six = graph.addNode(6);
    const seven = graph.addNode(7);
    const eight = graph.addNode(8);
    const nine = graph.addNode(9);
    const ten = graph.addNode(10);

    graph.addEdge(one, two);
    graph.addEdge(one, five);
    graph.addEdge(four, six);
    graph.addEdge(five, three);
    graph.addEdge(six, eight);
    graph.addEdge(six, ten);
    graph.addEdge(seven, ten);
    graph.addEdge(eight, nine)
    graph.addEdge(nine, ten);
    graph.addEdge(nine, three);

    expect(graph.size()).toBe(10);
    expect(graph.adjlist).not.toBe(null);
  });

  it('Should get the neighbors of a node', () => {
    const graph = new Graph();
    
    const one = graph.addNode(1);
    const two = graph.addNode(2);
    const four = graph.addNode(4); 
    graph.addEdge(one, two);
    graph.addEdge(one, four);
    graph.addEdge(two, four);

    let nodes = graph.getNodes();

    expect(nodes[0][0].value).toEqual(1);
    expect(nodes[1][0].value).toEqual(2);
    expect(nodes[2][0].value).toEqual(4);
  });

  it('Should return the correct number of nodes in a graph', () => {
    const graph1 = new Graph();

    graph1.addNode(1);
    graph1.addNode(2);

    const graph2 = new Graph();
    const one = graph2.addNode(1);
    const two = graph2.addNode(2);
    const three = graph2.addNode(3);
    const six = graph2.addNode(6);
    const ten = graph2.addNode(10);

    graph2.addEdge(one, two);
    graph2.addEdge(one, three);
    graph2.addEdge(three, six);
    graph2.addEdge(six, ten);
    graph2.addEdge(two, ten);

    expect(graph1.size()).toBe(2);
    expect(graph2.size()).toBe(5);

  });

  it('Should return Invalid Vertex when there are no neighbors', () => {
    const graph = new Graph();

    expect(graph.getNeighbors()).toBe('Invalid Vertex');
  });
});