function threeConsecutiveOdds(arr: number[]): boolean {
    let answer = false;
    let test = [];
    
    arr.forEach((num) => {
        const isOdd = num % 2 === 1;
        if(isOdd) {
            test = [...test, num]
        } else {
            test = []
        }
        if (test.length >= 3) {
            answer = true
        }
    })
    return answer 
};