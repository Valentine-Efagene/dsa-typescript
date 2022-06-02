

export function depthFirstPrint(graph: object, source: string) {
  const stack = [source]
  const visited = new Set()

  while (stack.length > 0) {
    const current = stack.pop()

    if (visited.has(current)) {
      continue
    }

    visited.add(current)
    console.log(current)

    for (let neighbor of graph[current]) {
      stack.push(neighbor)
    }
  }
}

export function depthFirstPrintRecursive(graph: object, source: string, visited = new Set()) {
  if (visited.has(source)) return
  visited.add(source)
  console.log(source)

  for (let neighbor of graph[source]) {
    depthFirstPrintRecursive(graph, neighbor, visited)
  }
}

export function breadthFirstPrint(graph: object, source: string, visited = new Set()) {
  const queue = [source]

  while (queue.length > 0) {
    const current = queue.shift()
    if (visited.has(current)) continue
    visited.add(current)
    console.log(current)

    for (let neighbor of graph[current]) {
      queue.push(neighbor)
    }
  }
}

export function hasPathDFS(graph: object, source: string, destination: string) {
  const stack = [source]

  while (stack.length > 0) {
    const current = stack.pop()
    if (current === destination) return true

    for (let neighbor of graph[current]) {
      stack.push(neighbor)
    }
  }

  return false
}

/**
 * @param graph 
 * @param source 
 * @param destination 
 * @returns 
 */
export function hasPathRecursive(graph: object, source: string, destination: string) {
  if (source === destination) return true

  for (let neighbor of graph[source]) {
    if (hasPathRecursive(graph, neighbor, destination)) return true
  }

  return false
}

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
}

//console.log(hasPathDFS(graph, 'f', 'j'))
breadthFirstPrint(graph, 'f')
//console.log(hasPathRecursive(graph, 'f', 'g'))