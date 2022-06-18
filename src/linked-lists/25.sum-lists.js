/**
 * Sum Lists:
 * You have two numbers represented by a linked list,
 * where each node contains a single digit.
 * The digits are stored in reverse order,
 * such that the 1 's digit is at the head of the list.
 * Write a function that adds the two numbers and returns
 * the sum as a linked list.
 */

/**
 * EXAMPLE:
 * Input: (6 -> 1 -> 7) + (2 -> 9 -> 5) = 617 + 295.
 * Output: 9 -> 1 -> 2; 912.
 */

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    add (node) {
        this.head = new Node(node, this.head);
    }

    shift (data) {
        let node = this.head;
        while (node.next) {
            node = node.next;
        }
        node.next = new Node(data, node.next);
    }

    buildReverse (numbers) {
        numbers.forEach((number) => {
            this.add(number);
        });
    }

    buildForward (numbers) {
        numbers.forEach((number) => {
            if (!this.head) {
                this.add(number);
            } else {
                this.shift(number);
            }
        });
    }

    print () {
        let string = '';
        let node = this.head;
        while (node) {
            string += ''+node.data;
            node = node.next;
        }
        console.log(string);
    }
}

const firstArray = [7, 1 , 6];
let listOne = new LinkedList();

const secondArray = [5, 9, 2];
let listTwo = new LinkedList();

listOne.buildReverse(firstArray);
listTwo.buildReverse(secondArray);

const listToNumberString = (node) => {
    let stringNumber = '';
    while (node) {
        stringNumber += '' +node.data;
        node = node.next;
    }
    return stringNumber;
}

const sumLists = (headA, headB) => {
    let firstNumber = listToNumberString(headA);
    let secondNumber = listToNumberString(headB);
    console.log(firstNumber, ' + ', secondNumber);
    console.log(parseInt(firstNumber) + parseInt(secondNumber));
}

sumLists(listOne.head, listTwo.head);

/**
 * Forward Order
 */

listOne = new LinkedList();
listTwo = new LinkedList();

listOne.buildForward(firstArray);
listTwo.buildForward(secondArray);

listOne.print();
listTwo.print();

sumLists(listOne.head, listTwo.head);