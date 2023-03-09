function findRotationCount(arr) {
  // find index of lowest number, which equals the rotation count

    let leftInd = 0;
    let rightInd = arr.length -1

    while (leftInd <= rightInd) {
        let middleInd = Math.floor((leftInd + rightInd)/2)
        if (arr[middleInd] < arr[middleInd - 1] && arr.length > 1) return middleInd
        else if (arr[middleInd > arr[middleInd + 1]] && arr.length > 1) return middleInd + 1
        else if (arr[middleInd] > arr[0] && leftInd !== rightInd) {
            if (arr[0] > arr[arr.length - 1]) leftInd = middleInd + 1
            else rightInd = middleInd - 1
        }
        else return middleInd
    }
    return -1
}


module.exports = findRotationCount