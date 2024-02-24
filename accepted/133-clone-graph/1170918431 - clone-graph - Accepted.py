"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

from typing import Optional
class Solution:
    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:

      if node is None:
        return None
      
      cloneMap = {}

      def dfs(node):
        if node in cloneMap:
          #already cloned/visited
          return cloneMap[node]
        
        copy = Node(node.val)
        cloneMap[node] = copy

        for nei in node.neighbors:
          copy.neighbors.append(dfs(nei))
        
        return copy
    
      return dfs(node)
        