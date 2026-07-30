class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = s.lower()
        s = "".join(char for char in s if char.isalnum())
        p1 = 0
        p2 = -1
        for i in range(len(s) // 2):
            if s[p2] != s[p1]:
                print(s[p2], s[p1])
                return False
            p2 -= 1
            p1 += 1
        return True
