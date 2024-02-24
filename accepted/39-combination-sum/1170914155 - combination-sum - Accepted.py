class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:

        #visualize decision tree with candidates
            #include/dont include = L,R 
            #stop traversing down a path when sum >= target
        #making 2 decisions at each recursion step
        #each candidate is atleast 1 with a max of target so:
        #Time:  O(2^height) = O(2^target)

        #i = which candidate allowed to choose
        #subset = which values added to current combination 
        #total = sum of subset
        res = []
        subset = []
        def dfs(i, total):
            if total == target:
                #copy of subset bc will still use subset for other combinations
                res.append(subset.copy())
                return
            if i == len(candidates) or total > target:
                #cant find combination
                return

            #include num at i
            subset.append(candidates[i])
            dfs(i, total + candidates[i])

            #dont include num at i
            subset.pop()
            dfs(i + 1, total) #total stays same bc we didnt add num here
        
        dfs(0,0)
        return res


             



        
        