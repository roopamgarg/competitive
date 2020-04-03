import math


def checkSemiprime(num): 
    cnt = 0
    primeFactors = []
    for i in range(2, int(math.sqrt(num)) + 1): 
        while num % i == 0: 
            num /= i 
            primeFactors.append(num)
        if len(primeFactors) >= 2:  
            break
  
    if(num > 1): 
        primeFactors.append(num)
    return primeFactors
  
def getAllPrimes():
    allPrimes = []
    for i in range(10000,10**100):
        print(str(((i/10**1000)*100)) + "%")
        if(isPrime(i)):
            allPrimes.append(i)


    print(len(allPrimes))

def isPrime(num):

    if num <= 1: 
        return False
    if num == 2: 
        return True
    if num > 2 and num % 2 == 0: 
        return False
  
    max_div = math.floor(math.sqrt(num)) 
    for i in range(3, 1 + max_div, 2): 
        if num % i == 0: 
            return False
    return True

print(getAllPrimes())