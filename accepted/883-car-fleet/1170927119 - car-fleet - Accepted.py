class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        #zip lets you iterate through 2 lists at the same time
        pair = [(p, s) for p, s in zip(position, speed)]
        #sort in reverse
        pair.sort(reverse=True)
        stack = []
        for p, s in pair:  # Reverse Sorted Order
            stack.append((target - p) / s)
            if len(stack) >= 2 and stack[-1] <= stack[-2]:
                stack.pop()
        return len(stack)
