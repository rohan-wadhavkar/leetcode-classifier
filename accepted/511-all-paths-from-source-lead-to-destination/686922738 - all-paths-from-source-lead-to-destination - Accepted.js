const leadsToDestination = function(n, edges, source, destination) {
    let nodeMap = new Map();
    for(let [from,to] of edges){
        if(!nodeMap.has(from)) nodeMap.set(from,[to]);
        else nodeMap.get(from).push(to);
    }

    let dfs = function(node, visitedColor){  
        if(visitedColor[node]) return visitedColor[node] === "BLACK";
        if(!nodeMap.has(node)) return node === destination;
        visitedColor[node] = "GRAY";
        for(let next of nodeMap.get(node)){
            if (!dfs(next,visitedColor)) return false;
        }
        visitedColor[node] = "BLACK";
        return true;
    }
    
    return dfs(source, {});

};