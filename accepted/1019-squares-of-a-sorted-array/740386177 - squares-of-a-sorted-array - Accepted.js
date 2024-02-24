/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    
    let output = [];
    
    let binaryInsert = (x) => {
        let left = 0;
        let right = output.length;
        
        while (left < right) {
            let mid = Math.floor((left+right)/2);        
            x > output[mid] ? left = mid + 1 : right = mid;
        }
        output.splice(left,0,x);
    }
    
    for (let element of nums) {
        binaryInsert(element*element);
    }
    
    return output;
};