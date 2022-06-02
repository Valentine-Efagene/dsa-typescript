"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasPathRecursive = exports.hasPathDFS = exports.breadthFirstPrint = exports.depthFirstPrintRecursive = exports.depthFirstPrint = void 0;
function depthFirstPrint(graph, source) {
    const stack = [source];
    const visited = new Set();
    while (stack.length > 0) {
        const current = stack.pop();
        if (visited.has(current)) {
            continue;
        }
        visited.add(current);
        console.log(current);
        for (let neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }
}
exports.depthFirstPrint = depthFirstPrint;
function depthFirstPrintRecursive(graph, source, visited = new Set()) {
    if (visited.has(source))
        return;
    visited.add(source);
    console.log(source);
    for (let neighbor of graph[source]) {
        depthFirstPrintRecursive(graph, neighbor, visited);
    }
}
exports.depthFirstPrintRecursive = depthFirstPrintRecursive;
function breadthFirstPrint(graph, source, visited = new Set()) {
    const queue = [source];
    while (queue.length > 0) {
        const current = queue.shift();
        if (visited.has(current))
            continue;
        visited.add(current);
        console.log(current);
        for (let neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }
}
exports.breadthFirstPrint = breadthFirstPrint;
function hasPathDFS(graph, source, destination) {
    const stack = [source];
    while (stack.length > 0) {
        const current = stack.pop();
        if (current === destination)
            return true;
        for (let neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }
    return false;
}
exports.hasPathDFS = hasPathDFS;
/**
 * @param graph
 * @param source
 * @param destination
 * @returns
 */
function hasPathRecursive(graph, source, destination) {
    if (source === destination)
        return true;
    for (let neighbor of graph[source]) {
        if (hasPathRecursive(graph, neighbor, destination))
            return true;
    }
    return false;
}
exports.hasPathRecursive = hasPathRecursive;
// const graph = {
//   a: ['b', 'c'],
//   b: ['d'],
//   c: ['e'],
//   d: ['f'],
//   e: [],
//   f: []
// }
const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: [],
};
//console.log(hasPathDFS(graph, 'f', 'j'))
breadthFirstPrint(graph, 'f');
//console.log(hasPathRecursive(graph, 'f', 'g'))
//# sourceMappingURL=index.js.map