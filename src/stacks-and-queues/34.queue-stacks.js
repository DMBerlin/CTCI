/**
 * Queue via Stacks:
 * Implement a MyQueue class which implements a queue using two stacks.
 */

class QueueStacks {
    constructor () {
        this.left = [];
        this.right = [];
    }

    get () {
        return [this.left, this.right];
    }

    pop () {
        let ref = this.left.length > this.right.length ? this.left : this.right;
        return ref.pop();
    }

    push (record) {
        let ref = this.left.length > this.right.length ? this.right : this.left;
        ref.unshift(record);
    }
}

const queue = new QueueStacks();

[1,2,3,4,5,6,7].forEach((value) => queue.push(value));

console.log(queue.get());

queue.pop();
queue.pop();

console.log(queue.get());