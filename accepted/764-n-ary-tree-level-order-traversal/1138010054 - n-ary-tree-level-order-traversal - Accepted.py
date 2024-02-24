"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""

class Solution:
    def levelOrder(self, root: 'Node') -> List[List[int]]:

        if not root:
            return []
        
        q = collections.deque([root])
        res = []

        while q:
            levelLen = len(q)
            level = []
            for i in range(levelLen):
                node = q.popleft()
                if node.children:
                    q.extend(node.children) #extend takes the elems of one lists and appends (extends) it to another
                level.append(node.val)
            res.append(level)
        
        return res
                


