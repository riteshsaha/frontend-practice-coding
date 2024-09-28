const { depthFirstSearch } = require("./depthFirstSearch");

describe('test depthFirstSearch', () => {
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

    test('empty graph', () => {
        expect(depthFirstSearch({}, 'A')).toEqual([]);
    });

    test('empty node', () => {
        expect(depthFirstSearch({ 'A': [] }, 'A')).toEqual(['A']);
    });

    test('graph with two nodes', () => {
        expect(depthFirstSearch({ 'A': ['B'], 'B': [] }, 'A')).toEqual(['A', 'B']);
    });

    test('graph with multiple nodes starting from root', () => {
        expect(depthFirstSearch(graph1, 'A')).toEqual(['A', 'B', 'E', 'D', 'I', 'J', 'F', 'C', 'G', 'H']);
    });

    test('graph with multiple nodes starting from child node', () => {
        expect(depthFirstSearch(graph1, 'B')).toEqual(['B', 'E', 'D', 'I', 'J', 'F']);
    });
});