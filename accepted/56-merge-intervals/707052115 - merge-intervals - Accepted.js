/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    
    if (intervals.length == 0) return [[]];
    if (intervals.length == 1) return intervals;
    
    //sort
    intervals.sort((a,b) => a[0]-b[0])
    let result = [intervals[0]];
    
    for (let j = 1; j < intervals.length; j++) {
        let previousInterval = result[result.length-1];
        let currentInterval = intervals[j];
        
        if (previousInterval[0] == currentInterval[0] || previousInterval[1]>= currentInterval[0]) {
            previousInterval=result.pop()
            previousInterval[1] = Math.max(previousInterval[1], currentInterval[1]);
            result.push(previousInterval);
        }
        else {
            result.push(currentInterval)

        }
        
    }
    
    return result;
};