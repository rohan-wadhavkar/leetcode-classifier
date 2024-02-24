class Solution:
    def maxProfit(self, prices: List[int]) -> int:

        maxProf = 0
        i,j = 0,1

        while j < len(prices):
            if prices[j] < prices[i]:
                i = j
                j += 1
                continue
            else:
                maxProf = max(maxProf, prices[j] - prices[i])
                j+=1

        return maxProf


