/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */

//dfs
var validPath = function(n, edges, start, end) {
   //dfs way
    let adj = {};
    for (let i = 0; i < n; i++) {
        adj[i] = [];
    }
    for (let edge of edges) {
        adj[edge[0]].push(edge[1]);
        adj[edge[1]].push(edge[0]);
    }
    let stack = [];
    stack.push(start);
    let visited = new Set();
    
    while (stack.length > 0) {
        let node = stack.pop();
        if (node == end) return true;
        if (visited.has(node)) continue;
        visited.add(node);
        
        for(let neighbor of adj[node]) {
            stack.push(neighbor);
        }
    }
    
    return false;
    
};


// //bfs
// var validPath = function(n, edges, start, end) {
//    //bfs way
//     let adj = {};
//     for (let i = 0; i < n; i++) {
//          adj[i] = [];
//      }
//     for (let edge of edges) {
//         adj[edge[0]].push(edge[1]);
//         adj[edge[1]].push(edge[0]);
//     }
    
    
//     let visited = new Set();
//     visited.add(start);
//     let queue = [start];
    
//     while (queue.length > 0) {
//         let node = queue.unshift();
//         if (node == end) return true;
      
//         for(let neighbor of adj[node]) {
//             if (!visited.has(node)){
//             visited.add(node);
//             queue.push(neighbor);
//             }
//         }
//     }
    
//     return false;
    
// };