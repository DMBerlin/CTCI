/**
 * Three in One: Describe how you could use a single array to implement three stacks.
 */

/**
 * Would set markers to identify where each stack starts in the array and where it ends.
 * Like, stack one would go from 0 to 10, stack two from 11 to 20 and stack tree from 21 to 30.
 * Then would shift pointers and move data around to keep space around its edge.
 * Then, when interacting with a specific stack, the user would need to say which stack he is working on.
 */

class Stack {
    constructor () {
        this.firstStack = { start: 0, end: 3 };
        this.secondStack = { start: 4, end: 6 };
        this.thirdStack = { start: 7, end: 9 }
        this.data = [];
    }

    add (record) {        
        this.data.push(record);
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