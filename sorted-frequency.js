function sortedFrequency(arr, inp) {
    // use similar logic to the count-zeroes function to find the first and last occurence of input, difference is frequency

    let leftInd = 0;
    let rightInd = arr.length - 1;
    
    function findFirst(arr, inp, leftInd, rightInd) {
        while (leftInd <= rightInd) {
            let middleInd = Math.floor(leftInd + rightInd)/2
            if (arr[middleInd] === inp && leftInd !== rightInd) {
                rightInd = middleInd - 1
            }
            else if (arr[middleInd] < inp && leftInd !== rightInd) {
                leftInd = middleInd + 1
            }
            else if (arr[middleInd] > inp && leftInd !== rightInd) {
                rightInd = middleInd - 1
            }
            else {
                if (arr[middleInd] === inp) return middleInd 
                else return middleInd + 1
            }
        }
        return -1
    }

    function findLast(arr, inp, leftInd, rightInd) {
        while (leftInd <= rightInd) {
            let middleInd = Math.floor(leftInd + rightInd)/2
            if (arr[middleInd] === inp && leftInd !== rightInd) {
                leftInd = middleInd + 1
            }
            else if (arr[middleInd] < inp && leftInd !== rightInd) {
                leftInd = middleInd + 1
            }
            else if (arr[middleInd] > inp && leftInd !== rightInd) {
                rightInd = middleInd - 1
            }
            else {
                if (arr[middleInd] === inp) return middleInd 
                else return middleInd - 1
            }
        }
        return -1
    }

    let first = findFirst(arr, inp, leftInd, rightInd)
    let last = findLast(arr, inp, leftInd, rightInd)
    return last - first + 1
}

module.exports = sortedFrequency


