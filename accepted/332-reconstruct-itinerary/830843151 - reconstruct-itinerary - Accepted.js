var findItinerary = function(tickets) {
    var map = {};
    var res = [];
 
    for (let [depart, dest] of tickets) {
        map[depart] ? map[depart].push(dest) : map[depart] = [dest];
    }
    for(let location in map) {
        map[location].sort();
    }  
    var dfs = function(node) {
        var dest = map[node];
        while(dest && dest.length>0) {
            dfs(dest.shift());
        }
        res.push(node);
    }
    dfs('JFK');
    return res.reverse();
};