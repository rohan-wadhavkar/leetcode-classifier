class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        
        
        if len(intervals) == 0:
            return []
        elif len(intervals) == 1:
            return intervals

        intervals.sort();    
        res = [intervals[0]]

        for i in range(1,len(intervals)):
            if intervals[i][0] <= res[-1][1]:
                res[-1][1] = max(res[-1][1], intervals[i][1])
            else:
                res.append(intervals[i])

        return res  
