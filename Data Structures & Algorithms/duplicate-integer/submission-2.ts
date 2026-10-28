class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums: number[]): boolean {
    const counts = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
      const cur = counts.get(nums[i]);
      if (cur !== undefined) {
        return true;
      }
      counts.set(nums[i], 1);
    }
    return false;
  }
}

