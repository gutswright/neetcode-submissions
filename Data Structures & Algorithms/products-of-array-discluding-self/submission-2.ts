class Solution {
  productExceptSelf(nums: number[]): number[] {
    const result = Array(nums.length).fill(1);

    let prefix = 1;

    // Multiply everything to the LEFT
    for (let i = 0; i < nums.length; i++) {
      result[i] = prefix;
      prefix *= nums[i];
    }

    let postfix = 1;

    // Multiply everything to the RIGHT
    for (let i = nums.length - 1; i >= 0; i--) {
      result[i] *= postfix;
      postfix *= nums[i];
    }

    return result;
  }
}