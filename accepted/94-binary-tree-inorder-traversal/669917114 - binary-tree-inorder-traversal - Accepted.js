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
var inorderTraversal = function(root) {
    
    let stack = [];
    let res = [];
    
    let currentNode = root;
    while(currentNode || stack.length !== 0) {
        while(currentNode) {
            stack.push(currentNode);
            currentNode = currentNode.left;
        }
        currentNode = stack.pop();
        res.push(currentNode.val);
        currentNode = currentNode.right;
    }
    return res;

};