/**
 * @param {number} N
 * @return {number}
 */

const solve = (arr,pos=1,result = 0) => {
    console.log(arr)
    if(arr.length === 0){
    console.log(result)

        result++;
        return result;
    }
    
    for(let i = 0 ; i < arr.length; i++){
        if((arr[i] % pos) === 0 || (pos % arr[i]) === 0){
            const newArr = arr.slice();
            newArr.splice(i,1)
            result = solve(newArr,pos + 1,result)
        }
    }
    return result;
}
var countArrangement = function(N) {
    const arr = []
    for(let i = 1; i <= N ; i++){
        arr.push(i)
    }
    return solve(arr);
    
};
console.log(countArrangement(3))