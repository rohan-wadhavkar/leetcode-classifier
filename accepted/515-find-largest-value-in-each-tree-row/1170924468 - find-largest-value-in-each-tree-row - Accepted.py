# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def largestValues(self, root: Optional[TreeNode]) -> List[int]:

        if root is None:
            return []

        q = collections.deque()
        q.append(root)
        res = []

        while q:
            maxVal = -math.inf
            for i in range(len(q)):
                node = q.popleft()
                maxVal=max(maxVal,node.val)
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
            res.append(maxVal)

        return res    



        