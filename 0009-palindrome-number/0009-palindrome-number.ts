function isPalindrome(x: number): boolean {
    const listX = [...String(x)]
    const len = listX.length
    
    return !listX.some((num, numIndex)=> {
        console.log(num)
        console.log(listX[len - numIndex - 1])
        return num !== listX[len - numIndex - 1]
    })
};