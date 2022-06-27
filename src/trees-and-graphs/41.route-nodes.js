/**
 * Route Between Nodes:
 * Given a directed graph, design an algorithm to find out whether
 * there is a route between two nodes.
 */

class Graph {
    constructor () {
        this.data = new Map();
    }

    addNode (record) {
        this.data.set(record, []);
    }

    addEdge (origin, destination) {
        this.data.get(origin).push(destination);
        this.data.get(destination).push(origin);
    }

    bfs (start, target, visited = new Set()) {
        const queue = [start];

        while (queue.length > 0) {
            const airport = queue.shift();
            const destinations = this.data.get(airport);

            for (const destination of destinations) {
                if (destination === target) {
                    return console.log('BFS: ' + start + ' has a route to ' + target);
                }
                if (!visited.has(destination)) {
                    visited.add(destination);
                    queue.push(destination);
                }
                console.log('BFS: ' + destination);
            }
        }
    }

    dfs (start, target, visited = new Set()) {
        visited.add(start);
        
        const destinations = this.data.get(start);

        for (const destination of destinations) {
            if (destination === target) {
                return console.log('DFS: ' + start + ' has a route to ' + target);
            }
            if (!visited.has(destination)) {
                this.dfs(destination, target, visited);
            }
            console.log('DFS: ' + destination);
        }
    }
}

const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(' ');

const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];

const graph = new Graph();

airports.forEach((airport) => graph.addNode(airport));

routes.forEach((route) => graph.addEdge(...route));

console.log('Graph: ', graph.data);

graph.bfs('PHX', 'BKK');

graph.dfs('PHX', 'BKK');