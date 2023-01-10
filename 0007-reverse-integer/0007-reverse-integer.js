/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const isPositive = x > 0
    
    const numArray = Array.from(String(Math.abs(x)), (num) => num)
    
    const reverseNum = numArray.reverse().join('')
    
    if(-reverseNum < -Math.pow(2, 31)) return 0
    if(reverseNum > Math.pow(2, 31) -1) return 0
    return isPositive ?+reverseNum :-reverseNum
    
};