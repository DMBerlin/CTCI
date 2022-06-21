/**
 * Three in One: Describe how you could use a single array to implement three stacks.
 */

class Stack {
    constructor () {
        this.data = [];
    }

    add (record) {
        this.data.unshift(record);
    }

    remove () {
        return this.data.pop();
    }

    peek () {
        return this.data[this.data.length - 1];
    }

    isEmpty () {
        return this.data.length === 0;
    }
}