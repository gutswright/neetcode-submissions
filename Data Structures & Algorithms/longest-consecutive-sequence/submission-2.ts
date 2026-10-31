class Solution {
  longestConsecutive(nums: number[]): number {
    if (nums.length === 0) {
      return 0;
    }

    const sNums = [...nums].sort((a, b) => a - b);

    let maxLength = 1;
    let curLength = 1;

    for (let i = 1; i < sNums.length; i++) {
      if (sNums[i] === sNums[i - 1]) {
        // Duplicate, skip it
        continue;
      }

      if (sNums[i] === sNums[i - 1] + 1) {
        // Consecutive number found
        curLength++;
      } else {
        // Sequence broken
        curLength = 1;
      }

      maxLength = Math.max(maxLength, curLength);
    }

    return maxLength;
  }
}
