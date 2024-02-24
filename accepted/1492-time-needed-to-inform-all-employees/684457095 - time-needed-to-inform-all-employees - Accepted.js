/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    
    let graph ={};
    
    for(let i = 0; i < n; i++) {
        graph[i] = [];
    }
    for(let i = 0; i < n; i++) {
        if(manager[i] !== -1) graph[manager[i]].push(i);
    }
        
    function traverse(node) {
        let maxTime = 0;
        
        for(let subordinate of graph[node]) {
            maxTime = Math.max(maxTime, traverse(subordinate));
        }
        return maxTime + informTime[node];
    }
    return traverse(headID);
};