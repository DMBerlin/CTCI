/**
 * Intersection:
 * Given two (singly) linked lists, determine if the two lists intersect.
 * Return the intersecting node. Note that the intersection is defined
 * based on reference, not value. That is, if the kth node of the first 
 * linked list is the exact same node (by reference) as the jth node
 * of the second linked list, then they are intersecting.
 */

class Node {
    constructor (data, next = null) {
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

    print () {
        let buffer = '';
        let node = this.head;
        while (node) {
            buffer += node.data;
            node = node.next;
        }
        return buffer;
    }

    getAt (index) {
        let counter = 1;
        let node = this.head;
        while (node && counter !== index) {
            node = node.next;
            counter++;
        }
        return node;
    }

    insertAt (ref, index) {
        let counter = 0;
        let prev = this.head;
        let node = this.head.next;
        while (prev) {
            // Inserting at the beggining;
            if (index === 0) {
                ref.next = prev;
                this.head = ref;
                return;
            }
            // Default behaivor;
            if (counter === index) {
                prev.next = ref;
                ref.next = node;
                return;
            }
            // Inserting at the end;
            if (counter === index && !node.next) {
                node.next = ref;
                return;
            }
            prev = node;
            node = node.next;
            counter++;
        }
    }

    size () {
        let counter = 0;
        let node = this.head;
        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    contains (ref) {
        let node = this.head;
        while (node) {
            if (node === ref) {
                return true;
            } else {
                node = node.next;
            }
        }
        return false;
    }
}

const linkedOne = new LinkedList();
const linkedTwo = new LinkedList();

[1, 2, 3, 4, 5].forEach((value) => {
    linkedOne.add(value);
});

[6, 7, 8, 9, 10].forEach((value) => {
    linkedTwo.add(value);
});

const nod = new Node(99);

linkedOne.insertAt(nod, 3);
linkedTwo.insertAt(nod, 2);

const intercets = (firstList, secondList) => {
    let node = firstList.head;

    while (node) {
        if (secondList.contains(node)) {
            return node;
        }
        node = node.next;
    }
    return false;
}

console.log(intercets(linkedOne, linkedTwo));