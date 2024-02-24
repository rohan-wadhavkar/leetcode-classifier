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




var maxPathSum = function(root) {

var max = Number.NEGATIVE_INFINITY;

const postOrder = (node) => {
    if (node == null) {
        return 0;
    }
    let left = Math.max(postOrder(node.left), 0);
    let right = Math.max(postOrder(node.right), 0);
    
    max = Math.max(node.val + left + right, max);
    return (node.val + Math.max(right,left));

}    
   
    postOrder(root);
    return max;
};

