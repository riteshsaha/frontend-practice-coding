/**
 * @param {Record<string, Array<string>} graph The adjacency list representing the graph.
 * @param {string} source The source node to start traversal from. It has to exist as a node in the graph.
 * @return {Array<string>} A DFS-traversed order of nodes.
 */
function depthFirstSearch(graph, source) {
    if (Object.keys(graph).length === 0) {
        return [];
    }

    const visited = new Set();

    const toBeVisited = [];
    toBeVisited.push(source);

    while (toBeVisited.length !== 0) {
        //console.log("toBeVisited", Array.from(toBeVisited));
        const node = toBeVisited.pop();
        visited.add(node);
        //console.log(Array.from(visited));

        // reverse() is needed because we need to pop() from top of stack; only reverse() wont work as it reverses the original array;
        // slice().reverse() creates a new copy of array and reverses it hence keeps the original array state unchanged.
        graph[node].slice().reverse().forEach(child => {
            if (!visited.has(child)) {
                toBeVisited.push(child);
            }
        });
    }

    return Array.from(visited);
}

const graph1 = {
  A: ['B', 'C', 'D'],
  B: ['E', 'F'],
  C: ['G', 'H'],
  D: ['I', 'J'],
  E: ['D'],
  F: [],
  G: [],
  H: [],
  I: [],
  J: [],
};
//console.log(depthFirstSearch(graph1, 'A')); // ['A', 'B', 'E', 'D', 'I', 'J', 'F', 'C', 'G', 'H']
//console.log(depthFirstSearch(graph1, 'B')); // ['B', 'E', 'D', 'I', 'J', 'F']

module.exports = {
    depthFirstSearch
}