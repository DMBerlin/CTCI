/**
 * Partition:
 * Write code to partition a linked list around a value x,
 * such that all nodes less than x come before all nodes greater than
 * or equal to x. If x is contained within the list, the values of x
 * only need to be after the elements less than x (see below).
 * 
 * The partition element x can appear anywhere in the "right partition";
 * it does not need to appear between the left and right partitions.
 */

 const LinkedList = require('./linked-list.class');

 const values = [6, 2, 5, 4, 3, 1, 7];
 
 let list = new LinkedList();
 
 values.forEach(value => list.add(value));
 
 const partition = (list, value) => { 
    const leftPartition = new LinkedList();
    const rightPartiiton = new LinkedList();

    let node = list.head;
    while (node) {
        if (node.data < value) {
            leftPartition.add(node.data);
        }

        if (node.data >= value) {
            rightPartiiton.add(node.data);
        }
        
        node = node.next;
    }

    return { leftPartition, rightPartiiton };
 }

 const join = (listOne, listTwo) => {
    let lastNode = listOne.getLast();
    lastNode.next = listTwo.head;
    return listOne;
 }

 const { leftPartition, rightPartiiton } = partition(list, 5);
 const finalList = join(leftPartition, rightPartiiton);
 finalList.printAll();