# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':

        if root is None:
            return None
        
        if root.val is p.val or root.val is q.val or (p.val < root.val and q.val > root.val) or (p.val > root.val and q.val < root.val):
            return root
        
        if root.val < p.val and root.val < q.val:
            return self.lowestCommonAncestor(root.right, p, q)
        
        else:
            return self.lowestCommonAncestor(root.left, p, q)

        



        