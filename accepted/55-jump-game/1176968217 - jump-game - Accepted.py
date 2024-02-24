class Solution:
    #idea: go backwards and if you can reach target
    #index, then you can reach end (decrement target and check if index == 0 at end)
    def canJump(self, nums: List[int]) -> bool:
        if len(nums)<=1:
            return True

        target = len(nums) - 1
        bkwds = len(nums) - 2
        while bkwds >= 0:
            if nums[bkwds] + bkwds >= target:
                target = bkwds
            bkwds -=1
        
        return target == 0



        