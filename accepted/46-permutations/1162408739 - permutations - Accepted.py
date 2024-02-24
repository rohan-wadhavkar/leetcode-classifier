#Typically, problems that ask you to find all of something with low bounds can be solved with backtracking.
#"Think of each call to the recursive function as being a node in the tree."

class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        #curr represents current perm being built
        def backtrack(curr):  
            if len(curr) == len(nums):
                ans.append(curr[:]) #[:] is a deep copy
                return
        
            for num in nums:
                if num not in curr:
                    curr.append(num)
                    backtrack(curr)
                    curr.pop()
            
        ans = []
        backtrack([])
        return ans
    
        

        