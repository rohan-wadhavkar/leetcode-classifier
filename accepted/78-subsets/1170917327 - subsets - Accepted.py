class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        
        #subset not permutation. no dups
        #empty subset is a subset
        #permutation cares about order, subset doesn't
        #[1,2] and [2,1] are dup; same subset

        #for each input element, choice of include element, or not include
            #visualize as binary tree
        #[1,2,3] = [2*2*2] = 2^n num of subsets
            #n is nums in input array 
        #Time: O(n)*2^n is basically max efficiency
            #O(n) is max length of each subset
            #O(n)*(num of subsets)
        #Space complexity:  O(N). We are using O(N) space to maintain curr, and are modifying curr in-place with backtracking

        
        res = []
        subset = [] #current subset

        def dfs(i):
            #iterate over all possible lengths from 0 to n
            if i == len(nums): 
                #out of bounds; past leaf node
                #copy of subset bc will still use subset for other combinations
                res.append(subset.copy())
                return
            # decision to include num
            subset.append(nums[i])
            # cant use same num so i+1
            dfs(i + 1)

            # decision NOT to include num
            subset.pop()
            dfs(i + 1)

        dfs(0)
        return res