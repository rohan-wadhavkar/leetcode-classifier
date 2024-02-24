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
// var findLeaves = function(root) {
//     var result = [];
//     while(root) {
//         let leafArray = [];
//         dfs(root, leafArray);
//         result.push(leafArray);
//         if (root == null) break
//     }
//     return result;
// };

// function dfs(root, leafArray) {
//     if (root == null) return null
//     if(!root.left && !root.right) {
//         leafArray.push(root.val);
//         return null;
//     }
//     root.left = dfs(root.left, leafArray);
//     root.right = dfs(root.right, leafArray);

//     return root;
// }

var findLeaves = function(root) {
    const res = {};
    const dfs = (node) => {
        if(!node) return 0;
        const depth = Math.max(dfs(node.left), dfs(node.right)) +1;
        if(res[depth]) {
            res[depth].push(node.val);
        } else {
            res[depth] = [node.val];
        }
        return depth;
    }
    dfs(root);
    return Object.values(res);
};