def solve(arr):
    rows = 0
    col = 0
    sum = 0
    for i in range(len(arr)):
        if(len(arr[i]) > len(list(set(arr[i])))):
            rows = rows + 1
    for i in range(len(arr)):
        newArr = []
        for j in range(len(arr)):
            if(arr[j][i] not in newArr):
                newArr.append(arr[j][i])
            
        if(len(arr) > len(newArr)):
            col = col + 1
    for i in range(len(arr)):
        sum = sum + arr[i][i]
    
    return [sum,rows,col]

t = int(input())
for i in range(t):
    N = int(input())
    arr = [[0] * N] * N 
    for p in range(N):
        arr[p] =  [int(x) for x in input().split()]
        
    result = solve(arr)
    print("Case #" + str(i+1) + ": " + str(result[0]) + " " + str(result[1]) + " " + str(result[2]))