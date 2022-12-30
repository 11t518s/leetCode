/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const duplicatedNums = [...new Set(nums)]
    
    const numberOfNums = duplicatedNums.map(duplicatedNum => nums.filter(num => num === duplicatedNum).length)
    
    
    const maxNum = Math.max(...numberOfNums)
    
    const indexOfMaxNum = numberOfNums.indexOf(maxNum)
    
    return duplicatedNums[indexOfMaxNum]
};