/**
 * List of Depths:
 * Given a binary tree, design an algorithm which creates a linked list
 * of all the nodes at each depth (e.g., if you have a tree with depth D,
 * you'll have D linked lists).
 */

class TreeNode {
    constructor (data, depth = 0) {
        this.depth = depth;
        this.data = data;
        this.left = null;
        this.right = null;
    }

    add (data, depth) {
        if (data > this.data) {
            this.right = new TreeNode(data, depth);
        }
        if (data < this.data) {
            this.left = new TreeNode(data, depth);
        }
    }
}

class Tree {
    constructor () {
        this.root = null;
    }

    add (data) {
        if (!this.root) {
            this.root = new TreeNode(data);
        } else {
            let node = this.root;
            let depth = 0;
            while (node) {
                depth++;
                if (node.data > data && !node.left) {
                    node.add(data, depth);
                    return;
                } else if (node.data < data && !node.right) {
                    node.add(data, depth);
                    return;
                } else if (node.data > data && node.left) {
                    node = node.left;
                } else if (node.data < data && node.right) {
                    node = node.right;
                }
            }
        }
    }    

    print () {
        const queue = [this.root];
        let node = queue.shift();
        while (node) {
            console.log(node);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            node = queue.shift();
        }
    }
}

class ListNode {
    constructor (data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class List {
    constructor () {
        this.head = null;
    }

    add (data) {
        if (!this.head) {
            this.head = new ListNode(data);
        } else {
            let node = this.head;
            while (node) {
                if (!node.next) {
                    node.next = new ListNode(data);
                    return;
                }
                node = node.next;
            }
        }
    }
}

const buildTree = () => {
    const tree = new Tree();
    [10, 8, 12, 7, 13, 9, 11]
        .forEach((value) => {
            tree.add(value);
        });
    return tree;
};

const builder = () => {
    const tree = buildTree();
    const lists = [];    
    const queue = [tree.root];
    let node = queue.shift();

    while (node) {
        if (!lists[node.depth]) {
            lists.push(new List());
            lists[node.depth].add(node.data);
        } else {
            lists[node.depth].add(node.data);
        }
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
        node = queue.shift();
    }

    return lists;
}

console.log(builder());