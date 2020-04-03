def rev(s):
    newStr = ""
    for i in s:
        if(i == "S"):
            newStr = newStr + "E"
        else:
            newStr = newStr + "S"
    return newStr

t = input()
for i in range(t):
    len = raw_input() 
    s = raw_input()
    print("Case #" + str(i + 1) + ": " + rev(s))