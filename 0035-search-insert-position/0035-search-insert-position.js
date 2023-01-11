/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const before = nums.findIndex((num) => num <= target)
    const after = nums.findIndex((num) => num >= target)
    console.log(before)
    console.log(after)
    
    return before === after ? before :after === -1 ? nums.length : after
};