/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    let answer = []
    let prevNums = [] 
    nums.forEach((num, numIndex) => {
        

        prevNums.some((prevNum, prevNumIndex) => {

            const isSame = prevNum + num === target
            if(!isSame) return;
            answer = [prevNumIndex, numIndex]

        })
        prevNums = [...prevNums, num]
       

    })
    return answer
    
    
};