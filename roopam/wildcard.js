/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatchLong = function(s, p) {
    const petternLength = p.length;
    const stringLength = s.length;
    let isLastAny = false
    const dp = new Array(petternLength).fill(false).map(() => new Array(stringLength).fill(false));
    for(let i = 0; i < petternLength; i++){
        for(let j = 0; j < stringLength ; j++){
            if(p[i] === s[j] || p[i] === "*" || p[i] === "?"){
                dp[i][j] = true;
            }
        }
    }

    let i = petternLength - 1;

        for(let j = stringLength - 1; j >= 0 ; j--){
            if(i < 0){
                return false;
            }
           if(dp[i][j] && p[i] !== "*"){
               if(j === 0 && p[i] === "?"){
                   isLastAny = true
               }
               i--;
           }else if(dp[i][j] && p[i] === "*"){
            if(i === 0){
                return true;
            }
               if(dp[i-1][j-1]){
                   i--;
               }
           }else{
               return false
           }
            
        }
    while(i >= 0){
        if(dp[i][0] && p[i] !== "*"){
            if( p[i] === "?"){
                isLastAny = true
            }
            i--;
        }else if(dp[i][0] && p[i] === "*"){
        
        i--;
        }
        // if((i===0 &&( p[0] === s[0] || (p[0] === "?" && s[0])) && !isLastAny && p[1] ==="*") || p[i] === "*"){
        //     i--;
        // }else if(p[i] === "?" && s[0] && !isLastAny){
        //     isLastAny = true;
        //     i--;
        // }
        else{
            return false;
        }
        
    }
 
    return true;
    
};

var isMatch = function(s, p) {
    const petternLength = p.length;
    const stringLength = s.length;
    let isLastAny = false
    let dp = new Array(stringLength+1).fill(false).map(() => new Array(petternLength+1).fill(false));
    dp[0][0] = true
     for(let i = 0; i < petternLength; i++){
        if(p[i] === "*"){
            dp[0][i+1] = true
        }else{
            break;
        }
     }

    for(let i = 1; i <= stringLength; i++){
        for(let j = 1; j <= petternLength ; j++){
           if(s[i-1] === p[j-1] || p[j-1] === "?"){              
                dp[i][j] = dp[i-1][j-1];             
           }else if(p[j-1] === "*"){
               dp[i][j] = dp[i-1][j] ? dp[i-1][j] : dp[i][j-1];
           }
        }
    }


 
    return dp[stringLength][petternLength];
    
};

console.log(isMatch("a","aa") === false)
console.log(isMatch("a","*?*") === true)
console.log(isMatch("ab","*?*?*") === true)

console.log(isMatch("","?") === false)



console.log(isMatch("abefcdgiescdfimde","ab*cd?i*de") === true)
console.log(isMatch("mississippi","m??*ss*?i*pi") === false)
console.log(isMatch("a","?*") === true)
console.log(isMatch("a","?*?") === false)