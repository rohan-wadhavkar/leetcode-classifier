/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    
    //initialize adjacency list
    let adj = {};
    let colorMap = new Map();
    for (let i = 0; i < numCourses; i++) {
        adj[i] = [];
        colorMap.set(i,"white");
    }
    for (let [course, preReq] of prerequisites) {
        if (adj[preReq].includes(course)) return [];
        adj[course].push(preReq);
    }
   
    let cycle = false;
    let result = [];
    
    //dfs
    let dfs = function(course) {
        if (cycle) return;
        //start recursion
        colorMap.set(course, "gray");
        
        for (let neighbor of adj[course]) {
                if (colorMap.get(neighbor) === "gray") { 
                    cycle = true;
                    return
                }
                else if(colorMap.get(neighbor) === "white") dfs(neighbor);
            
        }
        colorMap.set(course, "black");
        result.push(course);
        }
    for (let i = 0; i <numCourses; i++) {
        if (colorMap.get(i) ==="white") dfs(i);
    }
    if (!cycle) return result;
    return [];
    
};