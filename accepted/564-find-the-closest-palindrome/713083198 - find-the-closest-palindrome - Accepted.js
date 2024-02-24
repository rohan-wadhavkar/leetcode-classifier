var nearestPalindromic = function (n) {
    const num = BigInt(n)
    const nextPalindrome = getNextPalindrome((num+BigInt(1)).toString().split(""))
    const prevPalindrome = getPrevPalindrome((num-BigInt(1)).toString().split(""))
    
    const result = BigInt(n) - prevPalindrome <= nextPalindrome - BigInt(n) ? prevPalindrome : nextPalindrome;
    return String(result)
};

function getNextPalindrome(arr){
    const n = arr.length;
    for(let i = 0; i < n/2; i++){
        while(arr[i] != arr[n-i-1]){
            increment(arr, n-i-1);
        }
    }
    return BigInt(arr.join(""));
}
    
function increment(arr, i) {
    while (arr[i] == '9'){
        arr[i--] = '0';
    }
    arr[i]++;
}

function getPrevPalindrome(arr){
    const n = arr.length;
    for(let i = 0; i < n/2; i++){
        while(arr[i] != arr[n-i-1]){
            decrement(arr, n-i-1);
            if(arr[0] == '0'){
                return BigInt(arr.join(""));
            }
        }
    }
    return BigInt(arr.join(""));
}

function decrement(arr, i){
    while(arr[i] == '0'){
        arr[i--] = '9';
    }
    arr[i]--;
}