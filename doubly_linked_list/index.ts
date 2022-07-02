/**
 * Linked list node
 */
class N<T> {
  data: T
  prev: N<T>
  next: N<T>

  constructor(data: T, prev: N<T>, next: N<T>) {
    this.data = data
    this.prev = prev
    this.next = next
  }

  public toString(): string {
    return this.data.toString()
  }
}

/**
 * A doubly linked list implementation, adapted from William Fiset
 */
class DoublyLinkedList<T> implements Iterable<T> {
  [Symbol.iterator](): Iterator<T, any, undefined> {
    throw new Error("Method not implemented.")
  }

  private _size: number = 0
  private head: N<T> = null
  private tail: N<T> = null

  /**
   * Empty the linked list
   */
  public clear() {
    let trav: N<T> = this.head

    while (trav !== null) {
      let next = trav.next
      trav.prev = trav.next = null
      trav.data = null
      trav = next
    }

    this.head = this.tail = trav = null
    this._size = 0
  }

  /**
   * Current size of the linked list
   */
  public get size(): number {
    return this._size
  }

  public isEmpty(): boolean {
    return this._size == 0
  }

  public addFirst(elem: T) {
    if (this.isEmpty()) {
      this.head = this.tail = new N<T>(elem, null, null)
    } else {
      this.head.prev = this.tail = new N<T>(elem, null, this.head)
      this.head = this.head.prev
    }

    this._size++
  }

  /**
   * Add a node to the end of the list
   * @param elem
   */
  public addLast(elem: T) {
    if (this.isEmpty()) {
      this.head = this.tail = new N<T>(elem, null, null)
    } else {
      this.tail.next = new N<T>(elem, this.tail, null)
      this.tail = this.tail.next
    }

    this._size++
  }

  /**
   * Add a node to the end of the list. It is an alias for addLast
   * @param elem
   */
  public add(elem: T) {
    this.addLast(elem)
  }

  /**
   * Check the value of the first node, if it exists, O(1)
   * @returns T
   */
  public peekFirst() {
    if (this.isEmpty()) throw new Error("Empty list");
    return this.head.data
  }

  /**
   * Check the value of the last node, if it exists, O(1)
   * @returns T
   */
  public peekLast() {
    if (this.isEmpty()) throw new Error("Empty list");
    return this.tail.data
  }

  /**
   * Remove the first node (current head)
   * @returns the data at the first node, which we are removing
   */
  public removeFirst() {
    if (this.isEmpty()) throw new Error("Empty list");

    let data: T = this.head.data
    this.head = this.head.next
    --this._size

    if (this.isEmpty())
      this.tail = null
    else
      // Do a memory clean of the previous node
      this.head.prev = null

    return data
  }

  /**
   * Remove the last node (current tail)
   * Returns the data at the last node, which we are removing
   * @return T
   */
  public removeLast() {
    if (this.isEmpty()) throw new Error("Empty list");

    let data: T = this.tail.data
    this.tail = this.tail.prev
    --this._size

    if (this.isEmpty())
      this.head = null
    else
      // Do a memory clean of the node we just removed
      this.tail.next = null

    return data
  }

  /**
   * Remove an arbitrary node from the linked list, O(1)
   * Returns the data at the node we are removing
   * @return T 
   */
  private remove(node: N<T>) {
    if (node.prev == null) return this.removeFirst
    if (node.next == null) return this.removeLast

    node.next.prev = node.prev
    node.prev.next = node.next

    let data: T = node.data

    // Memory clean up
    node.data = null
    node = node.prev = node.next = null

    --this._size

    return data
  }

  /**
   * Removed the node at a particular index
   * Returns the data at that index
   * @param index 
   * @returns T
   */
  public removeAt(index: number) {
    if (index < 0 || index >= this._size) throw new Error("Illegal argument");

    let trav: N<T>

    if (index < this._size / 2) {
      for (let i = 0, trav = this.head; i !== index; i++) {
        trav = trav.next
      }
    } else {
      for (let i = this._size - 1, trav = this.tail; i !== index; i--) {
        trav = trav.prev
      }

      return this.remove(trav)
    }
  }

  /**
   * Removes a 
   * Returns true if the operation was successfull, and false otherwise
   * @param obj: T
   * @returns boolean
   */
  public removeValue(obj: T): boolean {
    let trav: N<T> = this.head

    for (trav = this.head; trav !== null; trav = trav.next) {
      if (obj === trav.data) {
        this.remove(trav)
        return true
      }
    }

    return false
  }

  /**
   * Returns the index of a data, or -1 if it is not in the linked list
   * @param obj : T
   * @returns number
   */
  public indexOf(obj: T): number {
    let index = 0
    let trav: N<T> = this.head

    for (trav = this.head; trav !== null; trav = trav.next, index++) {
      if (obj === trav.data) {
        this.remove(trav)
        return index
      }
    }

    return -1
  }

  /**
   * Check if the linked list contains a value
   * @param obj: T
   * @returns boolean
   */
  public contains(obj: T) {
    return this.indexOf(obj) !== -1
  }

  /**
   * Returns a string representation of this linked list
   * @returns string
   */
  public toString() {
    let s = ""

    let trav = this.head

    while (trav !== null) {
      s += trav.data

      if (trav.next !== null) {
        s += ", "
      }

      trav = trav.next
    }

    return s
  }
}