#
# @lc app=leetcode id=981 lang=python3
#
# [981] Time Based Key-Value Store
#

# @lc code=start
class TimeMap:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.hash_table = collections.defaultdict(list)

    def set(self, key: str, value: str, timestamp: int) -> None:
        self.hash_table[key].append((timestamp, value))

    def get(self, key: str, timestamp: int) -> str:
        if key not in self.hash_table:
            return ""
        else:
            nums = self.hash_table[key]
            left, right = 0, len(nums)
            while left < right:
                mid = left + (right-left)//2
                if nums[mid][0] <= timestamp:
                    left = mid + 1
                else:
                    right = mid
            if left == 0:
                return ""
            else:
                return nums[left-1][1]

# Your TimeMap object will be instantiated and called as such:
# obj = TimeMap()
# obj.set(key,value,timestamp)
# param_2 = obj.get(key,timestamp)
# @lc code=end

