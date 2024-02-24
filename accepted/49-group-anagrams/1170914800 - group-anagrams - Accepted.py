class Solution:
    def groupAnagrams(self, strs):
        ans = collections.defaultdict(list)
        for s in strs:
            count = [0] * 26
            for c in s:
                #find ascii value of letter, update count
                count[ord(c) - ord('a')] += 1
            #tuple as key since cant have list has key
            ans[tuple(count)].append(s)
        return ans.values()