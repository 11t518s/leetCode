/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
    const onePeriod = (numRows -1) * 2 ;
    const answerArray = new Array(numRows).fill("");
    
    const sLength = s.length
    if(numRows === 1) {
        return s
    }
    
    for(let i = 0; i < sLength; i++) {
        const targetIndex = Math.abs( Math.abs(i % onePeriod) - numRows + 1 )
        answerArray[targetIndex] = answerArray[targetIndex] + s[i]
    }
    return answerArray.reverse().join('')
};