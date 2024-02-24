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
 * @return {number}
 */
var countNodes = function(root) {
    
    let leftDepthCount = (node) => {
        if (!node) return 0;
        return leftDepthCount(node.left) + 1;
    }
    
    let rightDepthCount = (node) => {
        if (!node) return 0;
        return rightDepthCount(node.right) + 1;
    }
    
    let traverse = (node) => {
        let leftLength = leftDepthCount(node);
        let rightLength = rightDepthCount(node);
        if (leftLength == rightLength) {
            return Math.pow(2, leftLength) - 1;
        }
       return traverse(node.left) + traverse(node.right) + 1;
    }
    
    return traverse(root);

};