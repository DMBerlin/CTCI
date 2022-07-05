/**
 * Check Subtree:
 * Tl and T2 are two very large binary trees, with Tl much bigger than T2.
 * Create an algorithm to determine if T2 is a subtree of Tl. A tree T2 is
 * a subtree of Tl if there exists a node n in Tl such that the subtree of n
 * is identical to T2. That is, if you cut off the tree at node n,
 * the two trees would be identical.
 */

const t1arr = [5,2,8,1,9,7,3];
const t2arr = [2,1,3];

class Node {
    constructor(data) {
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
        if (!this.root) {
            this.root = new Node(value);
            return;
        } else {
            let node = this.root;
            while (node) {
                if (node && value > node.data && node.right !== null) {
                    node = node.right;
                } else if (node && value > node.data && node.right === null) {
                    node.addRight(value);
                    return;
                } else if (value < node.data && node.left !== null) {
                    node = node.left;                
                } else if (value < node.data && node.left === null) {
                    node.addLeft(value);
                    return;
                }
            }
        }
    }

    print () {
        const values = [];
        const queue = [this.root];
        let node = queue.shift();
        while (node) {
            if (node.data) values.push(node.data);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            node = queue.shift();
        }
        return values.toString();
    }
}

const T1 = new Tree();
const T2 = new Tree();

t1arr.forEach((value) => T1.add(value));
t2arr.forEach((value) => T2.add(value));

function dfs (node, value) {
    if (!node) {
        return null;
    }

    if (node.data === value) {
        return node;
    }

    if (node && value > node.data) {
        return dfs(node.right, value);
    } else {
        return dfs(node.left, value);
    }
}

function isSubTree (treeOne, treeTwo) {
    let ref = dfs(treeOne, treeTwo.data);

    let queue = [ref, treeTwo];

    while (queue.length) {
        let nodeOne = queue.shift();
        let nodeTwo = queue.shift();

        if (nodeOne.data !== nodeTwo.data) {
            return false;
        }

        if (nodeOne.left) queue.push(nodeOne.left);
        if (nodeTwo.left) queue.push(nodeTwo.left);

        if (nodeOne.right) queue.push(nodeOne.right);
        if (nodeTwo.right) queue.push(nodeTwo.right);
    }
    return true;
}

console.log(isSubTree(T1.root, T2.root));