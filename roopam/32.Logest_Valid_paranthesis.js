/**
 * @param {string} s
 * @return {number}
 */

class Stack {
    // const stack = [];
    constructor(){
        this.stack = [];
    }
    push = (val) =>{
        this.stack.push(val);
    }
     pop = () => {
        this.stack.pop();
    }
     top = () => {
        return this.stack[this.stack.length -1];
    }
}
var longestValidParenthesesFirst = function(s) {
    const stack = new Stack();
    stack.push(-1);
    let maxLen = 0;
    let len = 0;
    for(let i = 0; i < s.length; i++ ){
        if(s[i] === "("){
            stack.push(i)
        }else{
            if(stack.top() !== undefined){
                stack.pop();
                
                if(stack.top() === undefined){
                    stack.push(i);
                }else{
                    len = i - stack.top();
                    if(len > maxLen){
                        maxLen = len;
                    }
                }
            }
        }
    }
    return maxLen;
};


var longestValidParentheses = function(s) {
   let right = 0,left = 0,maxLength = 0;

   for(let i = 0 ; i < s.length ; i++ ){
    if(s[i] === "("){
        right++;
    }else{
        left++;
    }
    if(left === right){
        maxLength = Math.max(maxLength,right*2);
    }else if(right < left){
        right = left = 0;
    }
   }
   right = left = 0;
   for(let i = s.length - 1  ; i >= 0 ; i-- ){
    if(s[i] === "("){
        right++;
    }else{
        left++;
    }
    if(left === right){
        maxLength = Math.max(maxLength,right*2);
    }else if(right > left){
        right = left = 0;
    }
   }
   return maxLength;
};

console.log(longestValidParentheses("()(()") === 2)
console.log(longestValidParentheses("(()") === 2)
console.log(longestValidParentheses(")()())") === 4)
console.log(longestValidParentheses("()(((()(()))") === 8)
console.log(longestValidParentheses("())((())") === 4)

