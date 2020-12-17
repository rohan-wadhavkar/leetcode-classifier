#
# @lc app=leetcode id=31 lang=python3
#
# [31] Next Permutation
#

# @lc code=start
class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        if len(nums) <= 1: return
        index = self.find_first_asc_ele(nums)
        if index == -1:
            nums.reverse()
        else:
            i = len(nums)-1
            while i > index and nums[i] <= nums[index]:
                i -= 1
            nums[index], nums[i] = nums[i], nums[index]
            nums[index+1:] = nums[index+1:][::-1]

    def find_first_asc_ele(self, nums):
        i = len(nums)-1
        while i > 0 and nums[i-1] >= nums[i]:
            i -= 1
        return i-1 


# @lc code=end

