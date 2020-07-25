'use strict';

const util = require('util');

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencylist = new Map();
  }

  addVertex(value) {
    const vertex = new Vertex(value);
    this.adjacencylist.set(vertex, []);

    return vertex;
  }

  addEdge(startVertex, endVertex) {
    if (!this.adjacencylist.has(startVertex) || !this.adjacencylist.has(endVertex)) {
      console.log('Invalid Vertices');
    }
    const edges = this.adjacencylist.get(startVertex);
    edges.push(new Edge(endVertex, 0));
  }

  getNeighbors(vertex) {
    if (!this.adjacencylist.has(vertex)) {
      console.log('Invalid Vertex');
    }

    return [...this.adjacencylist.get(vertex)];
  }

  breadthFirst (startVertex) {

    const queue = [];
    const visitedNodes = new Set();

    queue.push(startVertex);
    visitedNodes.add(startVertex);

    while (queue.length) {
      const current = queue.shift(); // the new pop() method
      console.log(current);
      const neighbors = this.getNeighbors(current);

      // check if there are neighbors that haven't been visited
      for(let edge of neighbors) {
        const vertex = edge.vertex;
        if (visitedNodes.has(vertex)) {
          continue;
        } else {
          visitedNodes.add(vertex);
        }
        queue.push(vertex);
      }
    }
  }

  depthFirst(startVertex) {
    const stack = [];
    const visitedNodes = new Set();

    stack.push(startVertex);
    visitedNodes.add(startVertex);

    while (stack.length) {
      const current = stack.pop(); // the new pop() method
      console.log(current);
      const neighbors = this.getNeighbors(current);

      // check if there are neighbors that haven't been visited
      for(let edge of neighbors) {
        const vertex = edge.vertex;
        if (visitedNodes.has(vertex)) {
          continue;
        } else {
          visitedNodes.add(vertex);
        }
        stack.push(vertex);
      }
    }
  }
  getNodes() {
    return this.adjacencylist;
  }
  }

const graph = new Graph();

const one = graph.addVertex(1);
const two = graph.addVertex(2);
const three = graph.addVertex(3);
const four = graph.addVertex(4);

graph.addEdge(one, two)
graph.addEdge(two, four)
graph.addEdge(four, three)
graph.addEdge(three, two)


console.log(util.inspect(graph, false, null, true));

graph.breadthFirst(one);

console.log('*************');

graph.depthFirst(one);