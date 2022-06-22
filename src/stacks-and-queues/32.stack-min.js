/**
 * Stack Min: How would you design a stack which, in addition to push and pop,
 * has a function min which returns the minimum element?
 * Push, pop and min should all operate in 0(1) time.
 */

class Stack {
    constructor () {
        this.data = [];
    }

    push (record) {
        this.data.push(record);
        this.data.sort();
    }

    pop (record) {
        return this.data.pop()
    }

    min () {
        return this.data[0];
    }
}
