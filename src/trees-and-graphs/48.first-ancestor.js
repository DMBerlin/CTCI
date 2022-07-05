/**
 * First Common Ancestor:
 * Design an algorithm and write code to find the first common ancestor
 * of two nodes in a binary tree. Avoid storing additional nodes in a data structure.
 * NOTE: This is not necessarily a binary search tree.
 * Example:
 *         (3)
 *      /      \
 *    (5)      (1)
 *   /  \     /  \
 * (6)  (2) (0)  (8)
 *     /   \
 *   (7)   (4)
 * Input: 5 and 1
 * Output: 3
 */

class Node {
    constructor (data = null) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    addLeft (data) {
        this.left = new Node(data)
    }

    addRight (data) {
        this.right = new Node(data);
    }
}

class Tree {
    constructor (data) {
        this.root = new Node(data);
    }

    addLeftOn(target, value) {
        let queue = [this.root];
        while (queue.length) {
            let node = queue.shift();
            if (node.data === target) {
                node.addLeft(value);
                return;
            }
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return false;
    }

    addRightOn(target, value) {
        let queue = [this.root];
        while(queue.length) {
            let node = queue.shift();
            if (node.data === target) {
                node.addRight(value);
                return;
            }
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return false;
    }
}

const tree = new Tree(3);

(() => {
    tree.addLeftOn(3, 5);
    tree.addRightOn(3, 1);
    
    tree.addLeftOn(5, 6);
    tree.addRightOn(5, 2);
    
    tree.addLeftOn(2, 7);
    tree.addRightOn(2, 4);
    
    tree.addLeftOn(1, 0);
    tree.addRightOn(1, 8);
})()

function dfs (node, value) {
    if (node.data === value) return node;
    let stack = [node];
    while (stack.length) {
        let ref = stack.shift();
        if (ref.data === value) {
            return ref;
        }
        if (ref.left) stack.unshift(ref.left);
        if (ref.right) stack.unshift(ref.right);
    }
}

function lca (root, p, q) {
    if (!root) return null;
    if (root.data === p || root.data === q) {
        return root;
    }
    
    //BFS
    let lcaNode = null;
    let queue = [root];
    while (queue.length) {
        let node = queue.shift();
        if (node) {
            let nodeLeft = dfs(node, p);
            let nodeRight = dfs(node, q);

            if (nodeLeft && nodeRight) {
                lcaNode = node;
            }

            queue.push(node.left);
            queue.push(node.right);
        }
    }

    return lcaNode;
}

function lca2 (root, p, q) {
    let result = null;

    const dfs = (node) => {
        if (node === null) return false;
        let left = dfs(node.left);
        let right = dfs(node.right);

        let cur = node.data === p || node.data === q;

        if (left + right + cur >= 2) result = node;

        return left || right || cur;
    }

    dfs(root);
    return result;
}
let start = performance.now();
console.log(lca(tree.root, 6, 2));
let end = performance.now();
console.log(end - start);
start = performance.now();
console.log(lca2(tree.root, 6, 2));
end = performance.now();
console.log(end - start);
// Time Complexy: O(n)