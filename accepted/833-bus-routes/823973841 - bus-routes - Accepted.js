/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function(routes, source, target) {
    //https://www.youtube.com/watch?v=R58Q0J52qzI
    
//bus stops as keys, values are routes [i]    
let adjList = {};
for (let i = 0; i <routes.length; i++) {
    for (let element of routes[i]) {
        adjList[element] ? adjList[element].push(i) : adjList[element] = [i]
    }
}

//bfs queue, second element is number of buses taken
let toVisit = [[source,0]]
//visited set is for bus stops visited
let visited = new Set();
visited.add(source);
    
while (toVisit.length != 0) {
    let toVisitPair = toVisit.shift();
    if (toVisitPair[0] == target) return toVisitPair[1]; //base case
                      //for each route of routes bus stop is on
    for (let route of adjList[toVisitPair[0]]) {
        // for each bus stop in the route
        for (let stop of routes[route]) {
            if (!visited.has(stop)) {
                toVisit.push([stop,toVisitPair[1]+1])
            }
        }
        routes[route].length = 0
    }
 
}
    return -1;   

};