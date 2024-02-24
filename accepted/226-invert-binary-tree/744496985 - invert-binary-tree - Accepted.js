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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return null;
    let queue = [root];
    
    while(queue.length > 0) {
        let currentNode = queue.shift();
        
        tmpNode = currentNode.left;
        currentNode.left = currentNode.right;
        currentNode.right = tmpNode;
        
        if (currentNode.left != null) queue.push(currentNode.left);
        if (currentNode.right != null) queue.push(currentNode.right);    
    }
    
    return root;
};