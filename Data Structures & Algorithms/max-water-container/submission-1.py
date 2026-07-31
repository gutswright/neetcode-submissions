class Solution:
    def maxArea(self, heights: List[int]) -> int:
        # hashmap = {i: heights[i] for i in range(len(heights))}
        # print({key: value for key, value in hashmap.items()})
        l, r = 0, len(heights) - 1
        curMax = 0
        for i in range(len(heights)):
            print(heights[l], heights[r])
            curMax = max(min(heights[l],heights[r]) * (r-l), curMax) 
            if heights[r] > heights[l]:
                l += 1
            elif heights[r] < heights[l]:
                r -= 1
            else:
                r -= 1
        print(heights[l], heights[r])
        return curMax
        