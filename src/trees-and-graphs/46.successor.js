/**
 * Successor:
 * Write an algorithm to find the "next" node (i.e., in-order successor)
 * of a given node in a binary search tree.
 * You may assume that each node has a link to its parent.
 */

class Node {
    constructor (data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor () {
        this.root = null;
    }
}

const tree = new Tree();
tree.root = new Node(10);
tree.root.right = new Node(13);
tree.root.right.left = new Node(12);
tree.root.right.right = new Node(16);
tree.root.left = new Node(7);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(8);

function successor (node, value) {
    if (node === null) return und;
    if (value < node.data) {
        if (node.left && node.left.data === value) {
            return node;
        } else {
            return successor(node.left, value);
        }
    } else {
        if (node.right && node.right.data === value) {
            return node;
        } else {
            return successor(node.right, value);
        }
    }
}

console.log(successor(tree.root, 4));