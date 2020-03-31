
const solve = (s,len = 0,res = [],final = []) => {
    
    let cur = s.slice(0,len)

    let left = s.slice(len)

    if(s === s.split("").reverse().join("") &&  left.length === 0){
        res = [...res,s]
        final.push(res)
        return final
    }

    for(let i = 0 ; i < left.length ; i++){
        let newLeft = left.slice(0,i+1)
   
        if(newLeft === newLeft.split("").reverse().join("")){
            let newRes;
            if(cur.length > 0){
             newRes = [...res,cur]
            }else{
                newRes = [...res]
            }

            solve(left,i+1,newRes,final)
        }
    }
    
    return final
}

var partition = function(s) {
    // for(let i = 0; i < s.length; i++){
        console.log(solve(s))
    // }
   
};
partition("bba")