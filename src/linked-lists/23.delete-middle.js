/**
 * Delete Middle Node:
 * Implement an algorithm to delete a node in the middle
 * (i.e., any node but the first and last node, not necessarily
 * the exact middle) of a singly linked list, given only access
 * to that node.
 */

 const LinkedList = require('./linked-list.class');

 const values = [1, 3, 2, 4, 5, 6, 7];
 
 let list = new LinkedList();
 
 values.forEach(value => list.add(value));
 
 const removeMiddleNode = function (list) { 
    let fast = list.head;
    let index = 0;
    while(fast !== null) {
        if (fast.next && fast.next.next) {
            fast = fast.next.next;
            index++;
        } else {
            list.removeAt(index);
            return list;
        }
    }
 }
 
 list = removeMiddleNode(list);
 list.printAll();
 