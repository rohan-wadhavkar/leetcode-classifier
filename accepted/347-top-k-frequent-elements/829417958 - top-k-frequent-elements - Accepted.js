/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    let countMap = {};
    for (let num of nums) {
        countMap[num] ?  countMap[num]++ :  countMap[num] = 1;
    }
//In a Min-Heap, the smallest element is the first to be popped from the heap.	In a Max-Heap, the largest element is the first to be popped from the heap.
    let minHeap = [];
    for (let [key, value] of Object.entries(countMap)) {
    let left = 0;
    let right = minHeap.length;
    while (left < right) {
        let mid = Math.floor((left+right) / 2);
        if (value > minHeap[mid][1]) {
            right = mid;
        }
        else left = mid + 1;
        }
        minHeap.splice(left,0,[key,value]);
        if (minHeap.length > k) minHeap.pop();
    }

    return minHeap.map(elem => elem[0]);
};