/**
 * Check Balanced:
 * Implement a function to check if a binary tree is balanced.
 * For the purposes of this question, a balanced tree is defined
 * to be a tree such that the heights of the two subtrees of any
 * node never differ by more than one.
 */

class Node {
    constructor (data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    addLeft (data) {
        this.left = new Node(data);
    }

    addRight (data) {
        this.right = new Node(data);
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

    buildFrom (arr) {
        arr.forEach((value) => {
           this.add(value);
        });
    }
}


function checkHeigth(node) {
    if (node === null) return 0;
    return Math.max(checkHeigth(node.left), checkHeigth(node.right)) + 1;
}

function isBalanced(node) {
    if (node === null) {
        return true;
    }

    // Check the height for each node and
    // validate if the difference is
    // greater than one
    const leftNode = checkHeigth(node.left);
    const rightNode = checkHeigth(node.right);

    if (Math.abs(leftNode - rightNode) > 1) {
        return false;
    } else {
        return true;
    }
}

const array = [10, 8, 12, 7, 13, 9, 11, 14];

const tree = new Tree()
tree.buildFrom(array);

console.log(isBalanced(tree.root));

