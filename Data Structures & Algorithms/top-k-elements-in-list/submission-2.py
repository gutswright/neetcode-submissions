import heapq

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        counts = {num: nums.count(num) for num in set(nums)} 
        sorted_counts = sorted(counts.items(), key=lambda x: x[1], reverse=True)
        return [i[0] for i in sorted_counts[:k]]
        # print(sorted_counts[:k])
        # return heapq.nlargest(k, sorted_counts)
        