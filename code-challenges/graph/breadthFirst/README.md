# Challenge Summary
Breadth First graph traversal

## Challenge Description
Extend your graph object with a breadth-first traversal method that accepts a starting node. Without utilizing any of the built-in methods available to your language, return a collection of nodes in the order they were visited. Display the collection.

## Approach & Efficiency
In this challenge I check the unvisited vertices, mark them as visited and insert thme into a queue. If no adjacent vertex is visited, remove it from the queue. Rinse and repeat.

Time = O(V + E) since every Vertex and every Edge will be checked.
Space = O(1) to O(V^2) depending on the input to the graph

## Solution
[Whiteboard](graph-breadthFirst.png)
