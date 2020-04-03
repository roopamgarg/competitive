
def getNum(N):
    numStr = str(N)
    newRes = 0
    for i in numStr:
        if(i == "4"):
            newRes = newRes * 10 + (int(i) - 1)
        else:
            newRes = newRes * 10 + int(i)
    return newRes

t = input()
for i in range(t):
    N = input()
    firstNum = getNum(N)
    secondNum = N - firstNum
    print("Case #"+ str(i+1) + ": " + str(firstNum) + " " + str(secondNum))
  
