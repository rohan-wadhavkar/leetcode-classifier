/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
function findMissingRanges(nums, lower, upper) {
  const res = [];
  nums = [lower - 1, ...nums, upper + 1];

  for (let i = 1; i < nums.length; i++) {
    const diff = nums[i] - nums[i - 1];

    if (diff === 2) {
      res.push(`${nums[i - 1] + 1}`);
    } else if (diff > 2) {
      res.push(`${nums[i - 1] + 1}->${nums[i] - 1}`);
    }
  }

  return res;
}