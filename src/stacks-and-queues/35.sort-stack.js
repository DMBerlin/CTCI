/**
 * Sort Stack:
 * Write a program to sort a stack such that the smallest items are on the top.
 * You can use an additional temporary stack, but you may not copy the elements
 * into any other data structure (such as an array). The stack supports the
 * following operations: push, pop, peek, and is Empty.
 */

class Stack {
    constructor() {
        this.data = [];
    }

    push (record) {
        this.data.push(record);
        this.data.sort((a, b) => a > b ? -1 : 1);
    }

    pop () {
        return this.data.pop();
    }

    peek () {
        return this.data[this.data.length -1];
    }

    isEmpty () {
        return this.data.length === 0;
    }
}


const stack = new Stack();

[3,2,1,6,5,4,9,8,7].forEach((val) => stack.push(val));

console.log(stack.peek());