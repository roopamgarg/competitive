
def grayCode(n): 

    return n ^ (n >> 1) 
  
  
class Solution:
    def grayCode(self, n: int):
        arr = []
        for i in range(2**n):
            arr.append(grayCode(i))
            # print(grayCode(n)) 
        print(arr)

Solution().grayCode(4)