/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    
    let graph = {};
    let colorMap = new Map();
    for (let i = 0; i < numCourses; i++) {
        graph[i] = [];
        colorMap.set(i,"white");
    }
    for (let prereq of prerequisites) {
        graph[prereq[0]].push(prereq[1]);
    }
    
    
    let dfs = (node) => {
        if (colorMap.get(node) == "black") return true;   
        if (colorMap.get(node) == "gray") return false;   
        colorMap.set(node,"gray")
        for(let neighbor of graph[node]) {
            if (!dfs(neighbor)) return false;
        }
        colorMap.set(node,"black")
        return true
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false
    }
    return true
};