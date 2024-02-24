/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let leftPointer = 0;
    let rightPointer = height.length - 1;
    
    while (leftPointer < rightPointer) {
        max = Math.max(max, Math.min(height[leftPointer], height[rightPointer]) * (rightPointer-leftPointer));
         
        
        if (height[leftPointer] < height[rightPointer]) 
            leftPointer++;
        
        else
            rightPointer--;
    }
    return max;
};