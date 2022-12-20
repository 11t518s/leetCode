function findSpecialInteger(arr: number[]): number {
    const duplicatedArr = [...new Set(arr)];
    
    let answer = 0;
    
    
    duplicatedArr.forEach((duplicatedNum) => {
        const answerCount = arr.filter((rawNum) => rawNum === duplicatedNum).length
        
        if(answerCount > arr.length / 4) {
            answer = duplicatedNum
        }
    })
    
    return answer
    

};