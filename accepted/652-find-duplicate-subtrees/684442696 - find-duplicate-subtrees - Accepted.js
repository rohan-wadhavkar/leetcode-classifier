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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    let res = []
    let hash = {}
    
    const postOrder = (node) => {
        if(!node) return node
        
        let left =  postOrder(node.left)
        let right = postOrder(node.right)
        
        let key = `${node.val}-${left}-${right}`
        
        if(!hash[key]) hash[key] = 0
        hash[key]++

        if(hash[key] === 2) res.push(node)
        
        return key
    }
    
    postOrder(root)
    return res
};

