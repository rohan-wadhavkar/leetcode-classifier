"""
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""

class Solution:
    def connect(self, root: 'Optional[Node]') -> 'Optional[Node]':
        #perfect binary tree where all leaves are on the same level, and every parent has two children

        #bfs level order imp O(N) O(N)
        if not root:
            return root

        q = collections.deque([root])
        while q:
            levelLen = len(q) #level order traversal
            for i in range(levelLen): #in range means 0 to size, not including size. If size is 3, 0 -> 2
                node = q.popleft()
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)

                #if this condition is false, means node.right should be None. Also could be the case you accidentally set children to next by going into the next level
                if i < levelLen-1:  
                    node.next = q[0] #if still same level, node.next = front of queue node  (peek front node in queue)                   
                
        return root
                
        
#linked list approach O(N) O(1) 
        # revisit
        
        # if not root:
        #     return root
        
        # # Start with the root node. There are no next pointers
        # # that need to be set up on the first level
        # leftmost = root
        
        # # Once we reach the final level, we are done because we are calculating N + 1's next nodes (next level's next nodes)
        # while leftmost.left:
            
        #     # Iterate the "linked list" starting from the head
        #     # node and using the next pointers, establish the 
        #     # corresponding links for the next level

        #     #head is second pointer which serves to go "next" (go next (to the right instead of down) in level)
        #     head = leftmost
        #     while head:
                
        #         # CONNECTION 1. calculating the next level's nexts
        #         head.left.next = head.right
                
        #         # CONNECTION 2:  case where next pointer between nodes having different parents
        #         if head.next:
        #             head.right.next = head.next.left
                
        #         # Progress along the list (nodes on the current level)
        #         head = head.next
            
        #     # Move onto the next level
        #     leftmost = leftmost.left
        
        # return root 
            


        