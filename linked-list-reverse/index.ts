class Node {
  val: string
  next: Node

  constructor(val: string) {
    this.val = val
    this.next = null
  }
}

export function reverseLinkedListIter(head: Node): Node {
  let prev = null
  let curr = head

  while (curr !== null) {
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  return prev
}

export function reverseLinkedListRec(curr: Node, prev: Node = null): Node {
  if (curr === null) return prev

  const next = curr.next
  curr.next = prev
  return reverseLinkedListRec(next, curr)
}

const print = (head: Node) => {
  if (head === null) return

  console.log(head.val)
  print(head.next)
}

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')

a.next = b
b.next = c
c.next = d
d.next = null

//print(reverseLinkedListIter(a))
print(reverseLinkedListRec(a))