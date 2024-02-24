class Solution:
    def isValid(self, s: str) -> bool:

        stack = []
        map = {'(':')','{':'}','[':']' }

        for char in s:
            if char == ')' or char == '}' or char == ']':
                if len(stack) == 0:
                    return False
                if map.get(stack.pop()) != char:
                    return False
            else: 
                stack.append(char)
        return len(stack) == 0
            
