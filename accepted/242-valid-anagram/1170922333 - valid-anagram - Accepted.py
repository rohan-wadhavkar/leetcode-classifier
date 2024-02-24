# class Solution:
#     def isAnagram(self, s: str, t: str) -> bool:
#         if len(s) != len(t):
#             return False
#         dict = {}
#         for i in range(len(s)):
#             if s[i] in dict:
#                 dict[s[i]] = dict[s[i]]+1
#             elif dict.get(s[i]) == None:
#                 dict[s[i]] = 1
#             if t[i] in dict:
#                 dict[t[i]] = dict[t[i]]-1
#             elif dict.get(t[i]) == None:
#                 dict[t[i]] = -1
#             if dict[t[i]] == 0:
#                 dict.pop(t[i])
        
#         for x in dict.values():
#             if x != 0:
#                 return False
#         return True

class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        dict = {}
        for i in range(len(s)):
            dict[s[i]] = dict.get(s[i], 0) + 1
            dict[t[i]] = dict.get(t[i], 0) - 1
            if dict[t[i]] == 0:
                dict.pop(t[i])

        for x in dict.values():
            if x != 0:
                return False
        return True