def solve(arr):
    res = "";
    C_MAX = 0
    C_MIN = 0
    J_MAX = 0
    J_MIN = 0
    for i in range(len(arr)):
       
        if(arr[i][0] >= C_MAX):
            C_MIN = arr[i][0]
            C_MAX = arr[i][1];
            res = res + "C"
        elif(arr[i][1] <= C_MIN and arr[i][0] <= C_MIN):
            C_MIN = arr[i][0]
            res = res + "C"
        elif(arr[i][0] >= J_MAX):
            J_MIN = arr[i][0]
            J_MAX = arr[i][1];
            res = res + "J"
        elif(arr[i][1] <= J_MIN and arr[i][0] <= J_MIN):
            J_MIN = arr[i][0]
            res = res + "J"
        else:
            return "IMPOSSIBLE"
    return res

t = int(input())
for i in range(t):
    N = int(input())
    arr = [[0] * 2] * N 
    for p in range(N):
        arr[p] =  [int(x) for x in input().split()]
    result = solve(arr)
    print("Case #" + str(i+1) + ": " + str(result))
