class SinglyLinkedListNode {
  data: number | string;
  next: SinglyLinkedListNode;

  constructor(data: string | number, next: SinglyLinkedListNode) {
    this.data = data;
    this.next = next;
  }
}

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
export default function mergeLists(head1: SinglyLinkedListNode, head2: SinglyLinkedListNode) {
  if (head1 == null) return head2

  if (head2 == null) return head1

  if (head1.data <= head2.data) {
    head1.next = mergeLists(head1.next, head2)
    return head1
  }

  if (head1.data > head2.data) {
    head2.next = mergeLists(head2.next, head1)
    return head2
  }
}

const A1 = new SinglyLinkedListNode(20, null)
const A2 = new SinglyLinkedListNode(7, A1)
const A3 = new SinglyLinkedListNode(6, A2)
const A4 = new SinglyLinkedListNode(3, A3)
const A = new SinglyLinkedListNode(2, A4)

const B1 = new SinglyLinkedListNode(21, null)
const B2 = new SinglyLinkedListNode(17, B1)
const B3 = new SinglyLinkedListNode(7, B2)
const B4 = new SinglyLinkedListNode(7, B3)
const B = new SinglyLinkedListNode(4, B4)

function printList(list: SinglyLinkedListNode) {
  do {
    console.log(list.data)
  } while ((list = list.next));
}

printList(mergeLists(A, B))

//console.log(mergeLists(A, B))