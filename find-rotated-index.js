function findRotatedIndex(arr, inp) {
    // finds index using similar logic to sorted-frequency, also includes several quick returns if either left or right is index
    let leftInd = 0;
    let rightInd = arr.length - 1;

    while (leftInd <= rightInd) {
        let middleInd = Math.floor((leftInd + rightInd)/2);
        if (arr[middleInd] === inp) return middleInd;
        else if (inp === arr[leftInd]) return leftInd;
        else if (inp === arr[rightInd]) return rightInd;
        else if (arr[middleInd] < inp && leftInd !== rightInd) {
            if (inp > arr[0]) rightInd = middleInd - 1
            else leftInd = middleInd + 1
        } 
        else if (arr[middleInd] > inp && leftInd !== rightInd) {
            if (inp < arr[0]) leftInd = middleInd + 1
            else rightInd = middleInd - 1
        }
        else {
            rightInd = middleInd - 1
        }          
    }
    return -1
}

module.exports = findRotatedIndex