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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    
//     let toDeleteSet = new Set(to_delete);
//     let result = [];
    
//     if (toDeleteSet.has(root.val)) return result;

//     result.push(root);
    
//     let dfs = function(node) {
//         if (!node) return null;
        
//         node.left = dfs(node.left);
//         node.right = dfs(node.right);
        
//         if (toDeleteSet.has(node.val)) {
//             if (node.left) result.push(node.left);
//             if (node.right) result.push(node.right);
//             return null;
//         }
        
//         return node;
//     }
    
//     dfs(root);    
//     return result;
    
    
    const deleteSet = new Set(to_delete);
    const output = []
    
    function run(node) {
        if(!node) return null;
        
        node.left = run(node.left);
        node.right = run(node.right);
        
        if(deleteSet.has(node.val)) {
            if(node.left) output.push(node.left);
            if(node.right) output.push(node.right);
            return null;
        }  
        return node;
    }
    run(root)
    if(!deleteSet.has(root.val)) output.push(root);
    return output;
};