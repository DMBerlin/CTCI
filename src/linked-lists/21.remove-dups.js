/**
 * Remove Dups:
 * Write code to remove duplicates from an unsorted linked list.
 * FOLLOW UP:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

const LinkedList = require('./linked-list.class');

const values = [1, 3, 2, 4, 4, 5, 7, 9, 3, 0];

let list = new LinkedList();

values.forEach(value => list.add(value));

const removeDups = function (list) {
    if (!list.head) return;

    const map = new Map();
    let node = list.head;
    let index = 0;
    while(node) {
        if (map.has(node.data)) {
            list.removeAt(map.get(node.data));
        } else {
            map.set(node.data, index);
        }
        index++;
        node = node.next;
    }

    return list;
}

list = removeDups(list);
list.printAll();
