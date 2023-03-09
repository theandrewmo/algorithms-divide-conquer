function countZeroes(arr) {
    // find first zero and determine count based on remaining length of array

    let leftInd = 0;
    let rightInd = arr.length -1

    while (leftInd <= rightInd) {
        let middleInd = Math.floor((leftInd + rightInd)/2)
        if (arr[middleInd] === 1 && leftInd !== rightInd) {
            leftInd = middleInd + 1
        }
        else if (arr[middleInd] === 0 && leftInd !== rightInd) {
            rightInd = middleInd - 1
        }
        else {
            if (arr[middleInd] === 0) return arr.length - middleInd 
            else return arr.length - (middleInd + 1) 
        }
    }
    return -1
}

module.exports = countZeroes
