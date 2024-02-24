class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        #interger division '/' rounds down; so -2.5 -> 3; so cant use that

        oprSet = {'+','-','*','/'}
        tokenStack = []

        for elem in tokens:
            if elem not in oprSet:
                tokenStack.append(int(elem))
            else:
                if (len(tokenStack) > 1):
                    num2 = tokenStack.pop()
                    num1 = tokenStack.pop()
                    if (elem == '+'):
                        tokenStack.append(num1+num2)
                    elif (elem == '-'):
                        tokenStack.append(num1-num2)
                    elif (elem == '*'):
                        tokenStack.append(num1*num2)        
                    elif (elem == '/'):
                        # if num1/num2 < 0:
                        #     tokenStack.append(ceil(num1/num2))
                        # else:
                        #     tokenStack.append(num1//num2)

                        #int() automatically rounds to 0
                        tokenStack.append(int(num1/num2))
                    
        return tokenStack[0]        



