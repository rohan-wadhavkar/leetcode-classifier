/**
 * @param {string} num
 * @return {string}
 */
var nextPalindrome = function(num) {
    
    let len = num.length
    let arr = new Array(Math.floor(len/2));
    
    for (let i = 0; i < arr.length; i++) {
        arr[i] = num[i];
    }
    
    if (!nextPermutation(arr)) return "";
    
    let resultString = "";
    for (let char of arr) {
        resultString += char;
    }
    
    let reversedString = [...resultString].reverse().join('');
    if (len % 2 == 0) 
        return (resultString + reversedString)
    return resultString + num.substring(len/2, (len / 2) + 1) + reversedString;
    
};

let nextPermutation = (arr) => {
    
    let len = arr.length - 1;
    let perm = -1;
    
    for (let i = len-1; i >=0; i--) {
        if (arr[i] < arr[i+1]) {
            perm = i;
            break
        }
    } 
    if(perm  == -1) {
            reverse(arr, 0, len);
            return false;
        }
    for(let i = len; i >= 0; i--) {
        if(arr[i] > arr[perm]){
            swap(arr, perm, i);
            break;
        }
    }
    reverse(arr, perm + 1, len);
    return true;
}

 let reverse = (nums, start, end) => {
        while(start < end) 
            swap(nums, start++, end--);
    }

 let swap = (nums,start,end) => {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
    }