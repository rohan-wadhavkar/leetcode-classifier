/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */

// function maxScore(cardPoints, k) {
// 	// First step: initialise the window
//     let curSum = 0;
//     for (let i = 0; i < k; ++i) {
//         curSum += cardPoints[i];
//     }

// 	// Second step: slide it left k times
//     let maxSum = curSum;
//     for (let i = 1; i <= k; ++i) {
//         curSum += cardPoints[cardPoints.length - i] - cardPoints[k - i];
//         maxSum = Math.max(maxSum, curSum);
//     }

// 	return maxSum;
// }

var maxScore = function(cardPoints, k) {
    
    let totalScore = 0;
    let maxSum = 0;
    let n = cardPoints.length;
    let subArrayLength = n - k;
    let currentSubArraySum = 0;
    
    for (let i = 0; i < n; i++) {
        totalScore += cardPoints[i];
        if (i < subArrayLength) currentSubArraySum+=cardPoints[i];
    }
    maxSum = totalScore - currentSubArraySum;
    if (k == n) return totalScore;
    
    let prev = 0;
    let newCard = 0;
    for (let i = 1; i < n; i++) {
        prev = (i-1)
        if (i+subArrayLength-1 < n) {
            newCard = (i+subArrayLength-1);
            currentSubArraySum = currentSubArraySum + cardPoints[newCard] - cardPoints[prev];
            maxSum = Math.max(totalScore-currentSubArraySum, maxSum);
        }

    }
    
    return maxSum;
};