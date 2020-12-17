#
# @lc app=leetcode id=242 lang=python3
#
# [242] Valid Anagram
#

# @lc code=start
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        cnt_s = collections.Counter(s)
        cnt_t = collections.Counter(t)
        for c in cnt_s:
            if cnt_s[c] != cnt_t[c]:
                return False
        for c in cnt_t:
            if cnt_s[c] != cnt_t[c]:
                return False
        return True
        
# @lc code=end

