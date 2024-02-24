/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    let queue = [root];
    let res = [];
    while(queue.length){
        res.push(queue.map(node => node.val));
        let len = queue.length;
        while(len--){
            let node = queue.shift();
            for(let child of node.children){
                queue.push(child);
            }
        }
    }return res;
};