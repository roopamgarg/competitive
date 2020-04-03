const solve = (n,a,b) => {
    let prev = null
    let count = 0
    for(let i = 0; i < n ; i++){
        if(a[i] !== b[i]){
            if(!prev){
                prev = i
            }else if(a[prev] != a[i]){
                let temp = a[prev];
                a[prev] = a[i];
                a[i] = temp;
                prev = null;
                count++;
            }
        }
    }
    for(let i = 0; i < n ; i++){
        if(a[i] !== b[i]){
            count++
        }
    }
    return count
}

console.log(solve(5,[1,0,0,1,0],[1,1,0,0,1]))