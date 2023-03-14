//problem sum zero
//[-5,-4,-3,-2,0,2,4,6,8]

function sumZero(nums1) {
  let arr = [];
  let nums = nums1.sort((a, b) => a - b); //sorting in ascending order
  //console.log(nums);
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == 0) {
        arr.push(i);
        arr.push(j);
        return arr;
      }
    }
  }
}

const nums = [-5, -4, -3, -2, 0, 2, 4, 6, 8];
const ans = sumZero(nums); //time complexity here is o(n^2)
console.log(ans);
