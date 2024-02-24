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
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
var getDirections = function(root, startValue, destValue) {
    
    if(!root) return "";
    
    let graph = new Map();
    let queue = [root];

    while (queue.length > 0) {
        let node = queue.shift();
        if (node.left)  { 
            graph.has(node.left.val) ? graph.get(node.left.val).push([node.val,'U']) : graph.set(node.left.val, [[node.val,'U']]);
            graph.has(node.val) ? graph.get(node.val).push([node.left.val,'L']) : graph.set(node.val, [[node.left.val,'L']]);
            queue.push(node.left);
        }
        if (node.right)  {
            graph.has(node.right.val) ? graph.get(node.right.val).push([node.val,'U']) : graph.set(node.right.val, [[node.val,'U']]);
            graph.has(node.val) ? graph.get(node.val).push([node.right.val,'R']) : graph.set(node.val, [[node.right.val,'R']]);
            queue.push(node.right);
        }
    }
    
    let bfsQueue = [[startValue, '']];
    let seen = new Set();
    
    while (bfsQueue.length > 0) {
        let [node, path] = bfsQueue.shift();
        if (seen.has(node)) continue;
        seen.add(node);
        
        if (node == destValue) return path;
        for (let [child,direction] of graph.get(node)) {
            if (!seen.has(child))
                bfsQueue.push([child, path + direction]);
        }
    }
        
    
    
};