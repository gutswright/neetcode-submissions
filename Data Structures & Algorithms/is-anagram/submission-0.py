class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        s_hash = {}
        t_hash = {}
        for i in range(len(s)):
            if s[i] not in s_hash:
                s_hash[s[i]] = 1
            else:
                s_hash[s[i]] += 1
            if t[i] not in t_hash:
                t_hash[t[i]] = 1
            else:
                t_hash[t[i]] += 1
        print(t_hash)
        print(s_hash)
        return t_hash == s_hash

                



        key = val
        
        # {key: val for key, val in s.items}
        # first = 0
        # last = -1
        # if len(s) != len(t):
        #     return False
        # for num, elem in enumerate(s):
        #     if elem == t[last]:
        #         t-=1
        #     else:
        #         return False
        # return True

            # print(num)
            # print(elem)
