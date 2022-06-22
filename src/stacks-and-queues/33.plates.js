/**
 * Stack of Plates:
 * Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
 * Therefore, in real life, we would likely start a new stack when the previous stack
 * exceeds some threshold. Implement a data structure SetOfStacks that mimics this.
 * SetO-fStacks should be composed of several stacks and should create a new stack
 * once the previous one exceeds capacity.
 * SetOfStacks. push() and SetOfStacks. pop() should behave identically to a single stack
 * (that is, pop () should return the same values as it would if there were just a single stack).
 * 
 * FOLLOW UP
 * Implement a function popAt ( int index) which performs a pop operation on a specific sub-stack.
 */

class SetOfStacks {
    constructor (treshold = 10) {
        this.treshold = treshold;
        this.data = [[]];
    }
    
    push (record) {
        if (this.data[this.data.length - 1].length < this.treshold) {
            this.data[this.data.length - 1].push(record);
        } else {
            this.data.push([]);
            this.data[this.data.length - 1].push(record);
        }
    }

    pop () {
        if (this.data[this.data.length - 1].length === 0) {
            this.data.pop();
            return this.data[this.data.length - 1].pop();
        } else {
            return this.data[this.data.length - 1].pop();
        }
    }

    popAt (index) {
        return this.data[index].pop();
    }

    getSet () {
        return this.data;
    }

}

const stack = new SetOfStacks(3);

[1,3,2,5,4,6,7,0,8,9].forEach((value) => {
    stack.push(value);
});

console.log(stack.getSet());

stack.pop();
stack.pop();
stack.pop();
stack.push('X');
stack.popAt(1);

console.log(stack.getSet());