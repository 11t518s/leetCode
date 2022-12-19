
const isEvenNumber = (number) => number % 2 === 0

const findMedianSortedArrays = (nums1: number[], nums2: number[]): number => {
    
    const allNumbers = [...nums1, ...nums2].sort((a, b) => a - b)
    const isEven = isEvenNumber(allNumbers.length)
    
    if(isEven) {
        return (allNumbers[allNumbers.length/2] + allNumbers[allNumbers.length/2 - 1]) / 2
    } else {   
        return allNumbers[(allNumbers.length -1)/ 2]
    }
};