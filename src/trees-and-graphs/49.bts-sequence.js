/**
 * BST Sequences:
 * A binary search tree was created by traversing through an array from left to right
 * and inserting each element. Given a binary search tree with distinct elements,
 * print all possible arrays that could have led to this tree.
 * 
 * EXAMPLE:
 * Input: ( 1 ) - ( 2 ) - ( 3 )
 * Output: [2, 1, 3], [2, 3, 1]
 */

class Node {
    constructor (data = null) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    addLeft (value) {
        this.left = new Node(value);
    }

    addRight (value) {
        this.right = new Node(value);
    }
}

class Tree {
    constructor () {
        this.root = null;
    }

    add (value) {
        let node = this.root;
        if (!node) this.root = new Node(value);
        while (node) {
            if (node.data > value && node.left !== null) {
                node = node.left;
            } else if (node.data > value && node.left === null) {
                node.addLeft(value);
                return;
            } else if (node.data < value && node.right !== null) {
                node = node.right;
            } else if (node.data < value && node.right === null) {
                node.addRight(value);
                return;
            }
        }
    }
}

const tree = new Tree();

[2, 1, 3].forEach((value) => tree.add(value));

function buildPartial (root, preorder) {
    let queue = [root];
    let partial = [];
    while (queue.length) {
        let node = queue.shift();
        if (node) {
            partial.push(node.data);
        }
        if (preorder) {
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        } else {
            if (node.right) queue.push(node.right);
            if (node.left) queue.push(node.left);
        }
    }
    return partial;
}

function printSequences (root) {
    let result = [];
    
    result.push(buildPartial(root, true)); //pre-order
    result.push(buildPartial(root, false)); //pos-order

    return result;
}

console.log(printSequences(tree.root));