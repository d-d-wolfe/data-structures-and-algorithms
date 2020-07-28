'use strict';

const Graph = require('../graph/graph.js');

const graph = new Graph();


function getEdge(startVertex, endVertex) {
  console.log('start', startVertex);
  const edge = graph.adjacencylist;
  console.log(edge);
  
  if (graph.adjacencylist.has(startVertex) && graph.adjacencylist.has(endVertex)) {
    return edge;
  } else return console.log('You cannot get there from here!');



}

const one = graph.addNode('one');
const two = graph.addNode(2);

graph.addEdge(one, two, 5);

console.log(getEdge(one, two));

// console.log(getEdge());

