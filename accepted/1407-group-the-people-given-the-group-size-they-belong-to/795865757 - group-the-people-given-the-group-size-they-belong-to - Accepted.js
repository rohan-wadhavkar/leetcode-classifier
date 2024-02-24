/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    
    let map ={};
    for (let i = 0; i < groupSizes.length; i++) {
        let elem = groupSizes[i];
        map[elem] ? map[elem].push(i): map[elem] = [i];
    }
    
    let output = [];
    // for (let [key, value] of Object.entries(map)) {
        for (let key in map) {

        while (map[key].length > 0) {
            let group = [];
            for (let i = 0; i < key; i++) {
                group.push(map[key].shift());
            }
            output.push(group);
        }
    }
    
    return output;
    console.log(map);
    
};