/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */

var validTree = function(n, edges) {
    if (n < 2) return true;
    
    // visited set
    var visited = new Set();

    // Initalize adjacency list
    var adj = {};
    for (var i=0; i<n; i++) {
        adj[i] = [];
    }
    // Populate adjacency list
    for (var edge of edges) {
        adj[edge[0]].push(edge[1]);
        adj[edge[1]].push(edge[0]);
    }
    
    let dfs = function(node, prev) {
        if (visited.has(node)) {
            return false;
        }
        visited.add(node);
        
        //go through each neighbor of node
        for (let neighbor of adj[node]) {
                if (neighbor == prev) continue;
                if (!dfs(neighbor, node)) return false;
            
        }
        return true;
    }
    
    return (dfs(0,-1) && visited.size == n);

};