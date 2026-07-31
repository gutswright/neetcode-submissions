class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        charSet = set()
        l = 0
        res = 0

        for r in range(len(s)):
            while s[r] in charSet:
                charSet.remove(s[l])
                l += 1
            charSet.add(s[r])
            res = max(res, r - l + 1)
        return res
        # l, r = 0, 1
        # maxLength = 0
        # array = []

        # while r < len(s):
        #     print(f"l: {s[l]} r:{s[r]}")
        #     print(maxLength)
        #     if s[r] == " ":
        #         cur = "space"
        #     else:
        #         cur = s[r]
        #     if cur in array:
        #         l = r
        #         r += 1
        #         array = []
        #     else:
        #         array.append(cur)
        #         maxLength = max(maxLength, r - l)
        #         r+=1
        # return maxLength


