class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  // isOpen(s: string) {
  //   const open = new Set("(", "[", "{")
  //   if s in
  //
  //
  // }
  isValid(s: string): boolean {
    const open = new Set<string>(["(", "[", "{"]);
    const checkMap = new Map<string, string>([
      ["(", ")"],
      ["[", "]"],
      ["{", "}"],
    ]);
    let stack = [];
    for (let i = 0; i < s.length; i++) {
      if (open.has(s[i])) {
        // if it is an open
        stack.push(s[i]);
      } else {
        if (stack.at(-1) !== undefined) {
          if (checkMap.get(stack.at(-1)) === s[i]) {
            stack.pop();
          } else {
            return false;
          }
        } else {
          stack.push(s[i]);
        }
      }
    }
    return stack.length === 0;
  }
}