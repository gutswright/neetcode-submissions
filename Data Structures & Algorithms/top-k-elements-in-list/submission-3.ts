class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums: number[], k: number): number[] {
    const counts = new Map<number, number>();

    // let topNums = new Map(0, [0 * k]);

    for (let i = 0; i < nums.length; i++) {
      counts.set(nums[i], (counts.get(nums[i]) ?? 0) + 1);
    }

    const entries = [...counts.entries()];

    entries.sort((a, b) => b[1] - a[1]);

    return entries.slice(0, k).map((entry) => entry[0]);

    // for (const [num, count] of counts) {
    // for (let j = 0; j < topNums.length; j++) {
    //   if (count > topNums.values[j]){
    //     topNums.values[j] =
    //     topNums.[j] =
    //
    //   }
    //
  }
}

