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
 * @return {number[]}
 */
var rightSideView = function(root) {
    
    if (!root) return [];
    
    let queue = [root];
    let resultArray = [];
    
    while (queue.length != 0) {
        let levelLen = queue.length;
        while (levelLen > 0) {
            let node = queue.shift();
            levelLen--;
            if (levelLen == 0) resultArray.push(node.val);
            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }     
    }

    return resultArray;
    
    
};