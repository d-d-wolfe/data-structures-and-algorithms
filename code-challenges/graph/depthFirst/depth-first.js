'use strict';

const Graph = require('../graph.js');

class depthFirst extends Graph {
  traverseDepthFirst(startVertex) {
     const visitedNodes = [];

     this.traverseDepthFirstHelper(visitedNodes, startVertex);
     return visitedNodes;
  }

  traverseDepthFirstHelper(visitedNodes, startVertex) {
    visitedNodes.push(startVertex.value);
    const neighbors = this.getNeighbors(startVertex);
    for (let edge of neighbors) {
      if (visitedNodes.includes(edge.vertex.value)) {
        continue;
      }
      this.traverseDepthFirstHelper(visitedNodes, edge.vertex);
    }
  }
};  

module.exports = depthFirst;

let graph = new depthFirst();

let A = graph.addNode('A');
let B = graph.addNode('B');
let C = graph.addNode('C');

graph.addEdge(A, C);
graph.addEdge(A, B);

console.log(graph.traverseDepthFirst(A));