class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums: number[], target: number): number[] {
    let seen = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
      // const num = nums[i];
      const cur_comp = target - nums[i];

      if (seen.has(cur_comp)) {
        return [seen.get(cur_comp)!, i];
      }

      seen.set(nums[i], i);

      // console.log(cur_comp);
      // if (compliments.has(cur_comp)) {
      //   const thing = compliments.get(cur_comp);
      //   console.log(thing);
      // }
      // compliments.set(cur_comp, i);
      // console.log(compliments)
    }

    return [];
  }
}
