class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        nums_hash = {}
        for i in nums:
            print(i)
            if i in nums_hash:
                return True
            nums_hash[i] = 1
            # print(nums_hash)
        return False 


        
            