/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    
    if (!root) return null;
    let res = [];
    let queue = [root];
    
    while (queue.length > 0) {
        
        let rowCount = queue.length;
        while (rowCount > 0) {
            let node = queue.shift();
            rowCount--;
            if (rowCount!=0) {
            node.next = queue[0];
            }
            if (node.left) {
            queue.push(node.left);
            queue.push(node.right);
            }
        }
    }
    
    return root;
    
};