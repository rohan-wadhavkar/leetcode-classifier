/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = new Array(m).fill(0).map(() => new Array(n));
    for (let row = m-1; row >= 0; row--) {
        for (let col = n-1; col >= 0; col--) {
            if (row === m-1 || col === n-1) {
                dp[row][col] = 1;
            } else {
                dp[row][col] = dp[row][col+1] + dp[row+1][col];
            }
        }
    }
    return dp[0][0];
    // T.C: O(M*N)
    // S.C: O(M*N)
};