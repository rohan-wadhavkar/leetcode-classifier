class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:

        # each candidate can only be used once but multiple candidates can be the same num
        # ex: candidates = [10,1,2,7,6,1,5], target = 8
            # [[1,1,6],

        candidates.sort()
        res = []
        subset = []
        
        def dfs(i, total):
            if total == target:
                res.append(subset[::])
                return
            if i == len(candidates) or total > target:
                #dont continue down path 
                return
            
            #including candidate[i]
            subset.append(candidates[i])
            dfs(i+1, total+candidates[i])

            #not including candidate[i]; also including empty array []
            prev = subset.pop()
            while i + 1 < len(candidates) and candidates[i+1] == prev:
                i+=1
            #dont add to total bc not using candidate[i]
            dfs(i+1, total)
        
        dfs(0,0)
        return res

        