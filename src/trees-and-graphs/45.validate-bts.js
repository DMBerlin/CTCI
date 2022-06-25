/**
 * Validate BST:
 * Implement a function to check if a binary tree
 * is a binary search tree.
 */

class Node {
    constructor (data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    addRight (data) {
        this.right = new Node(data);
    }

    addLeft (data) {
        this.left = new Node(data);
    }
}

class Tree {
    constructor () {
        this.root = null;
    }

    add (data) {
        if (!this.root) {
            this.root = new Node(data);
        } else {
            let node = this.root;
            while (node) {
                if (data > node.data) {
                    if (!node.right) {
                        node.addRight(data);
                        return;
                    } else {
                        node = node.right;
                    }
                }
                if (data < node.data) {
                    if (!node.left) {
                        node.addLeft(data);
                        return;
                    } else {
                        node = node.left;
                    }
                }
            }
        }
    }
}

const treeOne = new Tree();

[6,4,8,2,9].forEach((value) => treeOne.add(value));

function validate (node, min = null, max = null) {
    if (max !== null && node.data > max) {
        return false;
    }
    if (min !== null && node.data < min) {
        return false;
    }
    if (node.left && !validate(node.left, min, node.data)) {
        return false;
    }
    if (node.right && !validate(node.right, node.data, max)) {
        return false;
    }
    return true;
}

console.log('Tree One: ', validate(treeOne.root));

const treeTwo = new Tree();
treeTwo.add(10);
treeTwo.root.addLeft(9);
treeTwo.root.left.addLeft(14);
treeTwo.root.addRight(11);
treeTwo.root.right.addRight(12);

console.log('Tree Two: ', validate(treeTwo.root));