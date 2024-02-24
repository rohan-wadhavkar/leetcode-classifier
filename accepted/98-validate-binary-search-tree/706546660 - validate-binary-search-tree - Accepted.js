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
 * @return {boolean}
 */
// var isValidBST = function(root) {
    
//     let stack = [];
//     let previousNodeVal = null;
//     let currentNode = root;
    
//     while(currentNode || stack.length !== 0) {
//         while(currentNode) {
//             stack.push(currentNode);
//             currentNode = currentNode.left;
//         }
//         currentNode = stack.pop();
//         if (previousNodeVal !=null && previousNodeVal >= currentNode.val)                return false;
        
//         previousNodeVal = currentNode.val;
//         currentNode = currentNode.right;
//     }
//     return true;
   

// };

var isValidBST = function(root, min = -Infinity, max = Infinity) {
    if(root === null)
        return true;
    if(root.val <= min || root.val >= max)
        return false;
    return isValidBST(root.right, root.val, max) && isValidBST(root.left, min, root.val)
};