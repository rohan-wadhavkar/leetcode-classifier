/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {

    let findLeft = () => {
        let left = 0;
        let right = nums.length-1;
        let leftMostIndex = -1;
        while (left <= right) {
            let half = Math.floor((left+right)/2)
            if (nums[half] > target) {
                right = half - 1;
            }
            else if (nums[half] < target) {
                left = half+1;
            }
            else {
                leftMostIndex = half;
                right = half-1;
            }
        }
        return leftMostIndex
    }
    
    let findRight = () => {
        let left =0;
        let right = nums.length-1;
        let rightMostIndex = -1;

        while (left <= right) {
            let half = Math.floor((left+right)/2)
            if (nums[half] > target) {
                right = half - 1;
            }
            else if (nums[half] < target) {
                left = half+1;
            }
            else {
                rightMostIndex = half;
                left = half+1;
            }
        }
        return rightMostIndex
    }
    
    return [findLeft(), findRight()]
    

};