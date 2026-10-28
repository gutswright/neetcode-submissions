
class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s: string, t: string): boolean {
    const myMap = new Map<string, number>();
    let diff = 0;

    for (const char of s) {
      myMap.set(char, (myMap.get(char) ?? 0) + 1);
      diff += 1;
    }
    for (const char of t) {
      const curVal = (myMap.get(char) ?? 0) - 1;
      if (curVal == -1) {
        return false;
      } else {
        diff -= 1;
      }
      myMap.set(char, curVal);
    }
    return diff === 0;
  }
}
