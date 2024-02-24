class Solution:
    #idea: whenever subarray is negative, make it 0 and iterate
    #kind of like sliding window
    #ex: [-3,2,4,1] -- at index 2, prev sub sum is neg, so start at 4
    
    def maxSubArray(self, nums: List[int]) -> int:
        #initialize res to first val, not 0, bc you could have [-1]
        res = nums[0]
        cur_subarray_sum = 0

        for n in nums:
            cur_subarray_sum += n
            res = max(res, cur_subarray_sum)
            if cur_subarray_sum < 0:
                cur_subarray_sum = 0
        return res
