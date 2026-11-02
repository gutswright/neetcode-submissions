class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums: number[], target: number): number {
    let start = 0;
    let end = nums.length - 1;
    // let maxIter = 3;
    // let iter = 0;
    while (end - start > 0) {
      let searchIndex = Math.floor(start + (end - start) / 2);
      console.log(searchIndex);
      // console.log(nums[searchIndex]);
      // console.log(target);
      // console.log(start, end);
      if (nums[searchIndex] < target) {
        console.log("bigger");
        start = searchIndex + 1;
      } else if (nums[searchIndex] > target) {
        console.log("smaller");
        end = searchIndex - 1;
      } else if (nums[searchIndex] === target) {
        console.log("this one");
        return searchIndex;
      }
      console.log(start, end);
    }
    if (nums.at(start)=== target) {
        return start
    } else {
        return -1
    }
  }
}
