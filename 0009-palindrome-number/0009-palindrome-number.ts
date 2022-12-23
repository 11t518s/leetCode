function isPalindrome(x: number): boolean {
    const listX = [...String(x)]
    const len = listX.length
    
    return !listX.some((num, numIndex)=> {
        return num !== listX[len - numIndex - 1]
    })
};