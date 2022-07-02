"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseLinkedListRec = exports.reverseLinkedListIter = void 0;
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
function reverseLinkedListIter(head) {
    let prev = null;
    let curr = head;
    while (curr !== null) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
exports.reverseLinkedListIter = reverseLinkedListIter;
function reverseLinkedListRec(curr, prev = null) {
    if (curr === null)
        return prev;
    const next = curr.next;
    curr.next = prev;
    return reverseLinkedListRec(next, curr);
}
exports.reverseLinkedListRec = reverseLinkedListRec;
const print = (head) => {
    if (head === null)
        return;
    console.log(head.val);
    print(head.next);
};
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
a.next = b;
b.next = c;
c.next = d;
d.next = null;
//print(reverseLinkedListIter(a))
print(reverseLinkedListRec(a));
//# sourceMappingURL=index.js.map