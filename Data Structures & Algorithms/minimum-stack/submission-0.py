class MinStack:

    def __init__(self):
       self.stack = [] 
       self.minStack = []

    def push(self, val: int) -> None:
        if self.minStack != []:
            self.minStack.append(min(self.minStack[-1], val)) 
        else:
            self.minStack.append(val)
        self.stack.append(val)
        
    def pop(self) -> None:
        if self.minStack != []:
            self.minStack.pop() 
        val = self.stack.pop()

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.minStack[-1]
        
