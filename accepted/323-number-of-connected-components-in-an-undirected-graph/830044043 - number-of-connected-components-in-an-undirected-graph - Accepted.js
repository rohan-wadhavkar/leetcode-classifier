/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    const visited = new Set();
    let count = 0;

    // build adjacency list
    const adj = {};
    for (let i = 0; i < n; i++) {
        adj[i] = [];
    }
    for (const [n1, n2] of edges) {
        adj[n1].push(n2);
        adj[n2].push(n1);
    }
    
    // dfs, keep track of visited nodes in set
    function dfs(val) {
        if (visited.has(val.toString())) return;
        visited.add(val.toString());
        for (const i of adj[val]) {
            dfs(i);
        }
    }
    
    // perform dfs on each node (not visited), since some may be islands
    for (const val in adj) {
        if (!visited.has(val.toString())) {
            dfs(val);
            count++;
        }
    }
    
    return count;
};