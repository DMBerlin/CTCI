/**
 * Remove Dups:
 * Write code to remove duplicates from an unsorted linked list.
 * FOLLOW UP:
 * How would you solve this problem if a temporary buffer is not allowed?
 */


const values = [1, 3, 2, 4, 4, 5, 7, 9, 0];

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

    addNode (data) {
        this.head = new Node(data, this.head);
    }

    getSize () {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++;
            node = node.next;
        }

        return counter;
    }

    getFirst () {
        return this.head;
    }

    getLast () {
        let node = this.head;
        while (node) {
            node = node.next;
        }
        return node;
    }

    clearList () {
        this.head = null;
    }

    removeFirst () {
        if (!this.head) return;
        this.head = this.head.next;
    }

    removeLast () {
        if (!this.head) return;
        let node = this.head;
        while (node) {
            if (node.next && !node.next.next) {
                node.next = null;
                return;
            }
            node = node.next;
        }
    }

    insertLast (data) {
        if (!this.head) {
            this.head = new Node(data, this.head);
        } else {
            let node = this.getLast();
            node.next = new Node(data, node.next);
        }
    }

    getAt (data, pos) {}

    removeAt (data, pos) {}

    insertAt (data, pos) {}
}