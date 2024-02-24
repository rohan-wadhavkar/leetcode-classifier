/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    
    if (!root) return [];
    
    
    let queue = [root];
    
    //right to left
    let zig = true;
    let result = [];
    while (queue.length != 0) {
        let rowLen = queue.length;
        let row = [];
        while (rowLen != 0) {
            rowLen--
            let node = queue.shift();
            zig ? row.push(node.val) : row.unshift(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        result.push(row);
        zig =!zig;
    }
    return result;
};