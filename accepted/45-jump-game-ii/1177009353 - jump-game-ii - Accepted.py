class Solution:
    #idea is, in each jumpwindow, find the maxjump and increment jumps by 1
    def jump(self, nums: List[int]) -> int:
        l, r, jumps = 0, 0, 0

        while r < (len(nums) - 1):
            maxJump = 0

            #current jump window
            # r + 1 to be inclusive since range goes up to, but does not include 2nd arg
            for i in range(l, r + 1):
                #find the max jump in each jump window
                maxJump = max(maxJump, i + nums[i])

            l = r + 1
            r = maxJump
            jumps += 1
        return jumps
