const depthFirst = require('./depth-first.js');

describe('Testing depth first preorder traversal', () => {

  it ('Should return a collection of nodes in depth first preorder traversal order', () => {
    const myGraph = new depthFirst();
    const one = myGraph.addNode(1);
    const two = myGraph.addNode(2);
    const four = myGraph.addNode(4);
    const six = myGraph.addNode(6);


    myGraph.addEdge(one, two);
    myGraph.addEdge(one, four);
    myGraph.addEdge(two, four);
    myGraph.addEdge(four, six);
    expect(myGraph.traverseDepthFirst(one)).toEqual([ 1, 2, 4, 6 ]);
  });

  it ('Should return a collection of nodes in depth first preorder traversal order', () => {
    const myGraph = new depthFirst();
    const a = myGraph.addNode('A');
    const b = myGraph.addNode('B');
    const c = myGraph.addNode('C');
    const d = myGraph.addNode('D');
    const e = myGraph.addNode('E');
    const f = myGraph.addNode('F');
    const g = myGraph.addNode('G');
    const h = myGraph.addNode('H');


    myGraph.addEdge(a, b);
    myGraph.addEdge(a, d);
    myGraph.addEdge(b, c);
    myGraph.addEdge(b, d);
    myGraph.addEdge(c, g);
    myGraph.addEdge(d, e);
    myGraph.addEdge(d, h);
    myGraph.addEdge(d, f);
    myGraph.addEdge(f, h);
    console.log

    let test = myGraph.traverseDepthFirst(a);
    expect(test).toEqual([
      'A', 'B', 'C',
      'G', 'D', 'E',
      'H', 'F'
    ]);
  });
});