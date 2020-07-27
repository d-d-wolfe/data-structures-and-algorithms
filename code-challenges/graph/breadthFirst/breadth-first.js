'use strict';

const util = require('util');
const Graph = require('../graph.js');

const graph = new Graph();

function breadthFirst(startVertex) {

  const queue = [];
  const visitedNodes = new Set(); // this is basically an array of unique values;

  queue.push(startVertex);
  visitedNodes.add(startVertex);

  while (queue.length) {
    const current = queue.shift(); // the new pop()!!

    console.log(current);
    const neighbors = graph.getNeighbors(current);

    // check if there are neighbors that haven't been visited
    for (let edge of neighbors) {
      const vertex = edge.vertex;

      if (visitedNodes.has(vertex)) {
        continue;
      } else {
        visitedNodes.add(vertex);
      }

      // push each edge that is adjacent to current into the queue.
      queue.push(vertex);
    }

  }

  return visitedNodes;
}



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


console.log(util.inspect(breadthFirst(one), false, null, true));

module.exports = breadthFirst;

