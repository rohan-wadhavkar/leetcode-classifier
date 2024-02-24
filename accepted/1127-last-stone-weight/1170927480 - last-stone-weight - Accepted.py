class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:

        for i in range(len(stones)):
            stones[i] *= -1

        heapq.heapify(stones)

        while len(stones) >= 2:
            y = heapq.heappop(stones)
            x = heapq.heappop(stones)

            if x == y:
                continue
            
            else:
                z = y-x
                heapq.heappush(stones, z)
        
        return 0 if len(stones) == 0 else stones[0] * -1

