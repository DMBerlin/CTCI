/**
 * Return Kth to Last:
 * Implement an algorithm to find the kth to last element
 * of a singly linked list.
 */

 const LinkedList = require('./linked-list.class');

 const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
 
 const list = new LinkedList();
 
 list.buildFrom(values);
 
 const returnKthToLast = function (list, k) {
     list.printAll(); 
     const newList = new LinkedList();
     let node = list.getAt(k);
     while (node) {
        newList.add(node.data);
        node = node.next;
     }
     newList.printAll();
 }
 
 returnKthToLast(list, 5);
 