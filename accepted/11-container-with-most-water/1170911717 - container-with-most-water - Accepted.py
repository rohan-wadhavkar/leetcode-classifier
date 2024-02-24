class Solution:
    def maxArea(self, height: List[int]) -> int:

        maxAmount = 0
        i,j = 0,len(height)-1

        while i != j:
            maxAmount = max((min(height[i],height[j])) * (j - i), maxAmount)
            if height[j] >= height[i]:
                i+=1
            else:
                j-=1
        
        return maxAmount


