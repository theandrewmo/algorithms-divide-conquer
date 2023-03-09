function findFloor(arr, inp) {
  // find index of the input or number prior to input, if location is index 0 then no floor, 
  // if inp is greater than last index, then last index is floor, else floor is value immediately prior to input

  let leftInd = 0;
  let rightInd = arr.length -1

  while (leftInd <= rightInd) {
        let middleInd = Math.floor((leftInd + rightInd)/2)
            
        if (arr[middleInd] > inp && leftInd !== rightInd) rightInd = middleInd - 1
        else if (arr[middleInd] < inp && leftInd !== rightInd) leftInd = middleInd + 1
        else { 
                if (arr[middleInd] > inp) 
                    if (middleInd === 0) return -1
                    else return arr[middleInd - 1]
                else {
                    if (middleInd === 0) return -1
                    else return arr[middleInd] 
                }
                   
            }
  }
  return -1
}

module.exports = findFloor