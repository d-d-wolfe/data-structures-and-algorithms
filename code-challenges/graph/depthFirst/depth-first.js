'use strict';

const Graph = require('../graph.js');
// const Stack = require('../../stacksAndQueues/stacks-and-queues.js');
let graph = new Graph();

function depthFirst(startVertex) {
  console.log(startVertex);
  const stack = [];
  const visited = new Set();

  stack.push(startVertex);
  visited.add(startVertex);


  let neighbors = this.getNeighbors(startVertex);

  while (neighbors.length) {
    for (let edge of neighbors) {
      const vertex = edge.vertex;

      if (!visited.has(vertex)) {
        visited.add(vertex);
        stack.push(vertex);
      }
    }
    neighbors = this.getNeighbors(stack[stack.length -1]);
  }

  while (stack.length) {
    console.log(stack.pop);
  }
  return;


  
}

graph.addNode('A');
graph.addNode('B');
graph.addNode('C');

graph.addEdge('A', 'C');
graph.addEdge('A', 'B');

console.log(depthFirst('A'));