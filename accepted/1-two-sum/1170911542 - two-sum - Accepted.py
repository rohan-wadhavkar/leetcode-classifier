class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        
        dict = {}
        for i in range(len(nums)):
           if dict.get(nums[i]) == None:
               dict[nums[i]] = i
        
        for i in range(1, len(nums)):
            partner = target - nums[i]
            if dict.get(partner) != None and dict.get(partner) != i:
                return [i, dict.get(partner)]
    

