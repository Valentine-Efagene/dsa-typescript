/**
 * Adapted from William Fiset's FreeCodeCamp lecture
 */

class UnionFind {
  // The number of elements in this union find
  private size: number

  // Used to track the number of elements in the union find
  private numComponents: number

  // Used to track the sizes of each of the components
  private sz: number[]

  // id[i] points to the parent of i. If id[i] = 1, then i is a root node
  private id: number[]

  constructor(size: number) {
    if (size <= 0)
      throw new Error("Size <= 0 is not allowed")

    this.size = this.numComponents = size
    this.sz = new Array(size)
    this.id = new Array(size)

    for (let i = 0; i < size; i++) {
      this.id[i] = i // Link to itself (self root)
      this.sz[i] = 1 // Each component is originally of size one
    }
  }

  /**
   * 
   * Find which component/set 'p' belongs to. Takes amortized constant time.
   * 
   * @param p 
   * @returns 
   */
  public find(p: number): number {
    // Find the root of the component/set
    let root: number = p

    while (root !== this.id[root]) {
      root = this.id[root]
    }

    // Compress the path leading back to the root.
    // Doing this operation is called "path compression"
    // and is what gives us amortized constant time complexity
    while (p != root) {
      let next: number = this.id[p]
      this.id[p] = root
      p = next
    }

    return root
  }

  /**
   * Return whether or not the elements 'p' and 'q' are the same components/set.
   * 
   * @param p 
   * @param q 
   * @returns boolean
   */
  public connected(p: number, q: number): boolean {
    return this.find(p) === this.find(q)
  }

  /**
   * Return the size of the components/set 'p' belongs to
   * 
   * @param p 
   * @returns number
   */
  public componentSize(p: number) {
    return this.sz[this.find(p)]
  }

  /**
   * Returns the number of remaining components/sets
   * 
   * @returns number
   */
  public components() {
    return this.numComponents
  }

  /**
   * 
   * @param p 
   * @param q 
   * @returns void
   */
  public unify(p: number, q: number) {
    let root1 = this.find(p)
    let root2 = this.find(q)

    // These elements are already in the same group
    if (root1 === root2) return

    // Merge two components/sets together
    // Merge smaller component/set into the larger one
    if (this.sz[root1] < this.sz[root2]) {
      this.sz[root2] += this.sz[root1]
      this.id[root1] = root2
    } else {
      this.sz[root1] = this.sz[root2]
      this.id[root2] = root1
    }

    // Since the roots found are different, we know that the 
    // number of components/sets has decreased by one
    this.numComponents--
  }
}