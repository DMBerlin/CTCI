/**
 * Palindrome:
 * Implement a function to check if a linked list is a palindrome.
 * What is a palindrome?
 * It reads the same forward or backward.
 * Ex: TENENT
 */


const arrayName = ['r', 'a', 'c', 'e', 'c', 'a', 'r'];

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

    size () {
        let counter = 0;
        let node = this.head;
        while (node ) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    print () {
        let stream = '';
        let node = this.head;
        while (node) {
            stream += ''+node.data;
            node = node.next;
        }
        return stream;
    }
}

const linkedList = new LinkedList();

arrayName.forEach((val) => {
    linkedList.add(val);
});

console.log(linkedList.print());

const checkPalidrome = (list) => {
    const stack = [];
    const size = list.size();
    const mid = Math.floor(size/2);
    let node = list.head;
    let counter = 1;
    while (node) {
        if (size%2 && counter === mid + 1) {
            node = node.next;
        } else if (counter < mid) {
            stack.push(node.data);
        } else if (counter > mid) {
            let val = stack.pop();
            if (val !== node.data) {
                return false;
            }
        }
        node = node.next;
        counter++;
    }
    return true;
};

console.log(checkPalidrome(linkedList));
