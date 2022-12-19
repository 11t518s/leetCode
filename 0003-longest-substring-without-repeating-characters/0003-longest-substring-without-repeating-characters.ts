const lengthOfLongestSubstring = (s: string): number => {
    let answer = []
    let testAnswer = []
    const listS = [...s]
    
    
    listS.forEach(item => {
        const isSameWord = testAnswer.some(test => test === item)
        if(isSameWord) {
            testAnswer = [...testAnswer.slice(testAnswer.indexOf(item) + 1), item]
        } else {
            testAnswer = [...testAnswer, item]
        }
        answer = testAnswer.length > answer.length  ? testAnswer : answer
        
    })
    
    return answer.length;
};