
const Node = require('./node.class');

class LinkedList {
    constructor () {
        this.head = null;
    }

    add (data) {
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

    clear () {
        this.head = null;
    }

    shift () {
        if (!this.head) return;
        this.head = this.head.next;
    }

    pop () {
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

    push (data) {
        let node = this.getLast(); 
        if (node) {
            node.next = new Node(data, node.next);
        } else {
            this.head = new Node(data, this.head);
        }
    }

    getAt (pos) {
        if (!this.head) return null;
        let node = this.head;
        let index = 0;
        while (node) {
            if (index === pos) return node;
            node = node.next;
            index++;
        }
    }

    removeAt (pos) {
        if (!this.head) return null;
        
        if (pos === 0) {
            this.head = this.head.next;
            return;
        }

        let index = 0;
        let node = this.head;
        let prevNode = this.head;
        while (node) {
            if (index === pos) {
                prevNode.next = node.next;
                return;
            } else {
                prevNode = node;
                node = node.next;
                index++;
            }
        }
    }

    insertAt (data, pos) {
        if (!this.head) return null;
        
        if (pos === 0) {
            return this.head;
        }
        
        let index = 0;
        let node = this.head;
        let prevNode = this.head;
        while (node) {
            if (index === pos) {
                prevNode.next = new Node(data, node);
                return;
            } else {
                prevNode = node;
                node = node.next;
                index++;
            }
        }
    }

    printAll () {
        if (!this.head) return;

        let node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
}

module.exports = LinkedList;