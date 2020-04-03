const stack = []
const maxRect = (arr) => {
    let maxArea = -1;
    let area = 0;
    let top = -1
    let i ;
    for( i = 0 ; i < arr.length; i++){

        while(top !== -1 && stack[top] !== undefined && arr[i] < arr[stack[top]]){
            
            if(top === 0){
              area = arr[stack[top]] * i;
            }else{
                area = arr[stack[top]] * ( i - stack[top-1] - 1);
            }
            if(area > maxArea){
                maxArea = area;
            }
            stack.pop();
            top--;
        }
        stack[++top] = i;
    }
    // i--;
    while(top !== -1){
            
        if(top === 0){
          area = arr[stack[top]] * i  ;
        }else{
            area = arr[stack[top]] * ( i  - stack[top-1] - 1);
        }
        if(area > maxArea){
            maxArea = area;
        }
        stack.pop();
        top--;
        // i++;
    }
    
    return maxArea;
}

console.log(maxRect([2,1,2,3,1]))
console.log(maxRect([3,1,3,2,2]))
console.log(maxRect([1]))
console.log(maxRect([1,0]))
console.log(maxRect([0,1]))
