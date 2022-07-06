/**
 * Random Node:
 * You are implementing a binary tree class from scratch which, in addition to
 * insert, find, and delete, has a method getRandomNode() which returns a random node
 * from the tree. All nodes should be equally likely to be chosen. Design and implement
 * an algorithm for getRandomNode, and explain how you would implement the rest of the methods.
 */

class Node {
    constructor (data = null) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    
    insertLeft (data) {
        this.left = new Node(data);
    }
    
    insertRight (data) {
        this.right = new Node(data);
    }
}

// Binary Tree Class
// insert ()
// find ()
// delete ()
// getRandom()
class Tree {
    constructor () {
        this.root = null;
    }

    insert (data) {
        if (this.root === null) {
            this.root = new Node(data);
        } else {
             let queue = [this.root];
             while (queue.length) {
                let node = queue.shift();
                if (!node.left) {
                    node.insertLeft(data);
                    return;
                } else if (!node.right) {
                    node.insertRight(data);
                    return;
                }

                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
             }
        }
    }

    find (node = this.root, data) {
        if (node === null) {
            return null;
        } else if (node.data === data) {
            return node;
        } else if (node.left) {
            this.find(node.left, data);
        } else if (node.right) {
            this.find(node.right, data);
        }
    }

    delete (data) {
        let queue = [this.root];
        while (queue.length) {
            let node = queue.shift();
            if (node.data === data) {
                if (node.left && !node.right) {
                    node = node.left;
                    return;
                } else if (!node.left && node.right) {
                    node = node.right;
                    return;
                } else if (node.left && node.right) {
                    let ref = node.right;
                    node = node.left;
                    let leaf = this.__getLeaf(node);
                    leaf.right = ref;
                    return;
                }
            }
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    __getLeaf (node) {
        if (!node.left && !node.right) {
            return node;
        }
        if (node.left) {
            return this.__getLeaf(node.left);
        }
        if (node.right) {
            return this.__getLeaf(node.right);
        }
    }

    print () {
        let buffer = [];
        let queue = [this.root];
        while(queue.length) {
            let node = queue.shift();
            buffer.push(node.data);
            if(node.left)queue.push(node.left);
            if(node.right)queue.push(node.right);
        }
        return buffer.toString();
    }
}

const tree = new Tree();

[5,3,7,2,8,1,9,4,6].forEach((value) => tree.insert(value));

console.log(tree.print());

tree.delete(9);

console.log(tree.print());