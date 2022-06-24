/**
 * Minimal Tree:
 * Given a sorted (increasing order) array with unique integer elements,
 * write an algorithm to create a binary search tree with minimal height.
 */

const values = [7, 8, 9, 10, 11, 12, 13];

class Node {
    constructor (data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function arrayToBST(nums, start, end){
    if(start > end) return null;

    let mid = Math.floor((start+end)/2);
    let node = new Node(nums[mid]);
    
    node.left = arrayToBST(nums, start, (mid - 1));
    node.right = arrayToBST(nums, (mid + 1), end);
    
    return node;
}

const btsTree = arrayToBST(values, 0, (values.length - 1));

console.log(btsTree);