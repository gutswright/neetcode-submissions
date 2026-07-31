class Solution:
    def trap(self, height: List[int]) -> int:
        # print(height)
        # l, r = 0, len(height) - 1
        vol = 0
        for i in range(len(height)):
            if height[0:i] == []:
                l = height[0] 
            else:
                l = max(height[0:i])
            if height[i:len(height)] == []:
                r = height[len(height)]
            else:
                r = max(height[i:len(height)])
            print(f"l:{l}, r:{r} i:{i}, height:{height[i]}")
            cur_vol = min(l, r) - height[i]
            if cur_vol > 0:
                print(f"cur_vol: {cur_vol}")
                vol += cur_vol

        # print(vol)
        return vol

        