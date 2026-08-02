class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        closeToOpen = {")": "(", "]": "[", "}": "{"}
        for c in s:
            if c in closeToOpen:
                if stack and stack[-1] == closeToOpen[c]:
                    stack.pop()
                else:
                    return False
            else:
                stack.append(c)
        return True if not stack else False 
        # if s == []: return False
        # stack = [s[0]]
        # hashmap = {"(": ")", "[": "]", "{": "}"}
        # match = [hashmap[s[0]]]
        # for i in range(1, len(s)):
        #     if stack != [] and s[i] == match:

        #         stack
        #     if stack != [] and hashmap[stack[-1]] == s[i]:
        #         stack.pop()
        #     else:
        #         stack.append(s[i])
        
        # return stack == []
        # for i in range(len(s)):
        #     if stack != [] and match[stack[-1]] == s[i]:
        #         stack.pop()
        #     else:
        #         stack.append(s[i])
        
        # return stack == []

        