class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []
        for c in tokens:
            if c == "+":
                stack.append(stack.pop() + stack.pop())
            elif c == "-":
                a, b = stack.pop(), stack.pop()
                stack.append(b - a)
            elif c == "*":
                stack.append(stack.pop() * stack.pop())
            elif c == "/":
                a, b = stack.pop(), stack.pop()
                stack.append(int(b / a))
            else:
                stack.append(int(c))
        return stack[0]

        # if tokens == []: return 0
        # operators = set(["+", "-", "*", "/"])
        # numStack = []
        # res = 0
        # for i in range(0, len(tokens)):
        #     if tokens[i] not in operators:
        #         # it must be a number
        #         numStack.append(tokens[i])
        #     elif len(numStack) > 1:
        #         # it must be an operator
        #         last = int(numStack.pop())
        #         curOp = tokens[i]
        #         prev = int(numStack.pop())
        #         if curOp == "-":
        #             res = prev - last
        #         if curOp == "+":
        #             res = prev + last
        #         if curOp == "*":
        #             res = prev * last
        #         if curOp == "/":
        #             res = prev * last
        #     print(tokens[i], res)
        # return res 




        