/**
 * Loop Detection: Given a circular linked list, implement an algorithm
 * that returns the node at the beginning of the loop.
 * DEFINITION
 * Circular linked list: A (corrupt) linked list in which a node's next
 * pointer points to an earlier node, so as to make a loop in the linked list.
 * EXAMPLE
 * Input: A -> B -> C - > D -> E -> C [the same C as earlier]
 * Output: C
 */

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor () {
        this.head = null;
    }

    add (data) {
        this.head = new Node(data, this.head);
    }

    push (node) {
        node.next = this.head;
        this.head = node;
    }

    build (nodes) {
        nodes.forEach((node) => {
            this.push(node);
        });
    }

    cycled () {
        let node = this.head;
        let hashNode = new Map();
        while (node) {
            let ref = hashNode.get(node);
            if (ref && ref === node) {
                return true;
            } else {
                hashNode.set(node, node);
            }
            node = node.next;
        }
        return false;;
    }
}


const node5 = new Node(5);
const linkedList = new LinkedList();

linkedList.build([
    new Node(1),
    new Node(2),
    new Node(3),
    new Node(4),
    node5,
    new Node(6),
    new Node(7),
    new Node(8),
    new Node(9),
    node5,
]);

console.log(linkedList.cycled());