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
var levelOrder = function(root) {
    
    let resultArray = [];
    
    if (root == null) {
        return resultArray;
    }
    
    let queue = [root];
    
    while (queue.length > 0) {
        let levelArray = [];
        let rowSize = queue.length;
        
        for (let i = 0; i < rowSize; i++) {
            let currentNode = queue.shift();
            if (currentNode.left != null) queue.push(currentNode.left);
            if (currentNode.right != null) queue.push(currentNode.right);
            
            levelArray.push(currentNode.val);
        }
        
        resultArray.push(levelArray);
    }
    
    return resultArray;
};