var searchInsert = function(nums, target) {
    let min = 0;
    let max = nums.length - 1;
    let mid = Math.floor((min+max)/2)
    if(target > nums[nums.length -1]){
        return nums.length
    }
    if(target < nums[0]){
        return 0
    }
    while(min <= max){
        mid = Math.floor((min+max)/2)
        if(nums[mid] > target){
            max = mid - 1;
        }else if(nums[mid] < target){
            min = mid + 1;
        }else{
            return mid
        }
    }
   return (nums[mid] < target) ? mid + 1 : mid
};

console.log(searchInsert([1,3,5,6],2) === 1)
console.log(searchInsert([1,3],2) === 1)
console.log(searchInsert([1,3,5,6],0) === 0)
console.log(searchInsert([1,3,5,6],7) === 4)
//comment
