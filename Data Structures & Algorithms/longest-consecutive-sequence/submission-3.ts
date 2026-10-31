class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums: number[]): number {
    if (nums.length === 0) {
      return 0;
    }

    let sNums = nums.sort((a, b) => a - b);
    // console.log(sNums);

    const quences: number[][] = [];
    let maxLength = 0;
    let curLength = 0;
    let lastSeen;
    for (let i = 0; i < sNums.length; i++) {
      if (lastSeen !== undefined && lastSeen + 1 === sNums.at(i)) {
        curLength += 1;
        // console.log(sNums.at(i - 1), sNums.at(i));
      } else if (lastSeen !== undefined && lastSeen === sNums.at(i)) {
        continue;
      } else {
        curLength = 1;
      }
      maxLength = Math.max(curLength, maxLength);
      lastSeen = sNums[i];
    }
    return maxLength;

    //   const quences: number[][] = [];
    //   for (let i = 0; i < nums.length; i++) {
    //     const elem = nums[i];
    //     for (let j = 0; j < quences.length; j++) {
    //       if (quences[j].at(-1) === elem) {
    //         quences[j].push(i);
    //       }
    //     }
    //     quences.push([i]);
    //   }
    //   const longest = quences.reduce(
    //     (max, arr) => (arr.length > max.length ? arr : max),
    //     [] as number[],
    //   );
    //   return longest;
    // }
  }
}
