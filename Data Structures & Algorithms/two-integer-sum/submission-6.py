class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:

        hashmap = {}

        for num, elem in enumerate(nums):
            leftover_target = target - elem 
            if leftover_target in hashmap:
                return [hashmap[leftover_target], num]

            else:
                hashmap[elem] = num
