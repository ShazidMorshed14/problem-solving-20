//problem sum zero
//[-5,-4,-3,-2,0,2,4,6,8]

function sumZero(nums1) {
  let arr = [];
  let nums = nums1.sort((a, b) => a - b); //sorting in ascending order
  //console.log(nums);
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == 0) {
        arr.push(nums[i]);
        arr.push(nums[j]);
        return arr;
      }
    }
  }
}

function optimizeSumZero(nums) {
  let left = 0;
  let right = nums.length - 1;
  let arr = [];
  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === 0) {
      arr.push(nums[left]);
      arr.push(nums[right]);
      return arr;
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

const nums = [-5, -4, -3, -2, 4, 9, 8, 6, 7];
//const ans = sumZero(nums); //time complexity here is o(n^2)
const ans = optimizeSumZero(nums); //time complexity here is o(n)
console.log(ans);
