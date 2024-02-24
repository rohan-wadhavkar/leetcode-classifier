/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function subarraysWithKDistinct(A, K) {
  function atMostK(k) {
    let l = 0;
    let res = 0;
    const count = {};

    for (let r = 0; r < A.length; r++) {
      if (count[A[r]] == null) count[A[r]] = 0;

      //lose a capacity
      if (count[A[r]] === 0) {
          k--;
      }
      count[A[r]]++;

      while (k < 0) {
        count[A[l]]--;

        //the element you're leaving behind is unique (if == 0) so you are gaining a capacity
        if (count[A[l]] === 0) k++;
        l++;
      }
    //  gives the length of the contiguous subarray
      res += r - l + 1;
    }
    return res;
  }

// subArrayExactlyK = subArrayAtMostK - subArrayAtMostK - 1. This is basically saying, give me the amount of subarrays we can form with at least 3, and give me the amount of subarrays we can form with at least 2, and the diff between the two will be only subarrays at 3 (since we have eliminated everything 2 and under).
  return atMostK(K) - atMostK(K - 1);
}