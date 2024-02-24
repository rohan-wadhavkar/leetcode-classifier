# class Solution:
#     def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:

#         maxDistPoss = [-1,-1]
#         curSum = 0
#         for i in range(len(cost)):
#             curSum += gas[i] - cost[i]
#             if curSum < 0:
#                 curSum = 0
            
#             elif curSum > maxDistPoss[0]:
#                 maxDistPoss = [curSum, i]
        
#         if maxDistPoss[1] == -1:
#             return -1
        
#         toVisit = len(cost)
#         capacity = 0
#         for i in range(maxDistPoss[1],len(cost)):
#             capacity += gas[i] - cost[i]
#             toVisit -= 1
#             if capacity < 0:
#                 return -1
#         if toVisit > 0 and capacity >= 0:
#             for i in range(maxDistPoss[1]):
#                 capacity += gas[i] - cost[i]
#             if capacity < 0:
#                 return -1
        
#         return maxDistPoss[1]


class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        total_gain = 0
        curr_gain = 0
        answer = 0
        
        for i in range(len(gas)):
            # gain[i] = gas[i] - cost[i]
            total_gain += gas[i] - cost[i]
            curr_gain += gas[i] - cost[i]

            # If we meet a "valley", start over from the next station
            # with 0 initial gas.
            if curr_gain < 0:
                curr_gain = 0
                answer = i + 1
        
        return answer if total_gain >= 0 else -1