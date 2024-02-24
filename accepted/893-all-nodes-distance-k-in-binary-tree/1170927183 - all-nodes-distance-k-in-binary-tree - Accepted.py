# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def distanceK(self, root: TreeNode, target: TreeNode, k: int) -> List[int]:
        
        graph = collections.defaultdict(list)
        # make an undirected graph from the directed binary tree
        def build_graph(cur, parent):
            if cur and parent:
                #dont need to store the treenode, just the val
                graph[cur.val].append(parent.val)
                graph[parent.val].append(cur.val)
            if cur.left:
                build_graph(cur.left,cur)
            if cur.right:
                build_graph(cur.right,cur)

        build_graph(root, None)

        answer = []
        visited = set([target.val])

        def dfs(node, distance):
            if distance == k:
                answer.append(node)
                return  # just return if dist at k so you dont proceed further
            for neighbor in graph[node]:
                if neighbor not in visited:
                    visited.add(neighbor)
                    dfs(neighbor, distance + 1)

        dfs(target.val, 0)
        return answer



        
        