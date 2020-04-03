def getPossible(arr):
    finalArray = arr
    for i in range(len(arr)):
        for j in range(i+1,len(arr)):
            res = abs(arr[i] - arr[j])
            if(res not in finalArray):
                finalArray.append(res)
            
        

    return len(finalArray)


print(getPossible([6,2]))