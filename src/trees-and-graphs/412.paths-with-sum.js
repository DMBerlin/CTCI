/**
 * Paths with Sum:
 * You are given a binary tree in which each node contains an integer value (which
 * might be positive or negative). Design an algorithm to count the number of paths that sum to a
 * given value. The path does not need to start or end at the root or a leaf, but it must go downwards
 * (traveling only from parent nodes to child nodes).
 */

//                     (9)
//             /               \
//          (5)                (11)
//         /   \              /     \
//      (-2)     (-4)      (-2)      (10)
//     /   \    /   \     /   \    /    \
//   (1)   (3)(2)   (10)(1)   (2)(3)   (4)


class Node {
    constructor(data = null) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    addLeft (value) {
        this.left = new Node(value);
        return this.left;
    }

    addRight (value) {
        this.right = new Node(value);
        return this.right;
    }
}

let root = new Node(9);
let a1 = root.addLeft(5);
let a2 = root.addRight(11);

let b1 = a1.addLeft(-2);
let b2 = a1.addRight(-4);
let b3 = a2.addLeft(-2);
let b4 = a2.addRight(3);

b1.addLeft(1);
b1.addRight(3);

b2.addLeft(2);
b2.addRight(10);

b3.addLeft(1);
b3.addRight(2);

b4.addLeft(3);
b4.addRight(4);

function sumsToTarget (paths, target) {
    return paths.reduce((cur, acc) => acc + cur) === target;
}

function pathSums (root) {
    let pathSums = [];

    const dfs = (node, paths) => {
        if (node === null) {
            return;
        }

        if (sumsToTarget(paths, 20)) {
            return pathSums.push(paths);
        }
        
        if (node.left) {
            dfs(node.left, [...paths, node.left.data]);
        };
        if (node.right) {
            dfs(node.right, [...paths, node.right.data]);
        };
    }

    dfs(root, [root.data]);
    return pathSums;
}

console.log(pathSums(root));