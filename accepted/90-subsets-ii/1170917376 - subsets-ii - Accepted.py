class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:

        nums.sort() #have to sort so you get same nums next to each other [5,2,5,3,2] -> [2,2,3,5,5]
        res = []
        subset = [] #current subset

        def dfs(i):
            #iterate over all possible lengths from 0 to n
            if i == len(nums): 
                #out of bounds; past leaf node
                #copy of subset bc will still use subset for other combinations
                res.append(subset[::]) # [::] same as copy()
                return
            # decision to include num
            subset.append(nums[i])
            dfs(i + 1)

            # decision NOT to include num
            prev = subset.pop()
            while i+1 < len(nums) and prev == nums[i+1]:
                i+=1

            #still want to run not matter what bc will add empty array to result (necessary)
            dfs(i + 1)

        dfs(0)
        return res
        