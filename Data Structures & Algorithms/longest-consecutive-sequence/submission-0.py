class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        numSet = set(nums)
        longest = 0

        for n in nums:
            if (n -1) not in numSet:
                length = 0
                while (n + length) in numSet:
                    length += 1
                longest = max(length, longest)
        return longest

        # prev = nums[0] 
        # cur = nums[0]
        # longest = 0
        # cur_len = 0
        # for ind, num in enumerate(nums):

            # if ind == 0:
            #     continue
            # if cuof the lonr - prev > longest:
            #     longest = cur - prev
        #     if cur - prev != 1:
        #         cur_len = 0
        #     prev = cur
        #     cur += 1
        #     print(cur_len)
        # print(longest)


            



        
        prev = cur


        