//https://www.baeldung.com/java-quicksort
export function getQuickSortAnimations(array) {
  //const animations = [];
  //if (array.length <= 1) return array;
  console.log("array recieved : " + array);
  let auxiliaryArray = array.slice();
  quickSort(auxiliaryArray, 0, array.length - 1);
  //return animations;
  console.log("array sorted : " + auxiliaryArray);
  //return auxiliaryArray;
  checkthesortresult(array, auxiliaryArray);
}

function quickSort(auxiliaryArray, startIndex, endIndex) {
  if (startIndex < endIndex) {
    let partitionIndex = findPartition(auxiliaryArray, startIndex, endIndex);
    quickSort(auxiliaryArray, startIndex, partitionIndex - 1);
    quickSort(auxiliaryArray, partitionIndex + 1, endIndex);
    // console.log("array sorted : " + auxiliaryArray);
  }
}

function checkthesortresult(originalarray, sortedarray) {
  let autooriginalarray = originalarray.sort((a, b) => a - b);
  console.log("the auto sorted array " + autooriginalarray);
  console.log("the algo sorted array " + sortedarray);
  if (originalarray.length != sortedarray.length) console.log("False length");
  else {
    // comapring each element of array
    for (let i = 0; i < originalarray.length; i++)
      if (originalarray[i] != sortedarray[i]) console.log("False");
    console.log("True");
  }
}

//this is the algorithm that seem to work for this
function findPartition(auxiliaryArray, startIndex, endIndex) {
  const pivot = auxiliaryArray[endIndex];
  // let pivot = (startIndex + (startIndex - endIndex)) / 2;
  let pivotIndex = startIndex;
  for (let j = startIndex; j < endIndex; j++) {
    if (auxiliaryArray[j] <= pivot) {
      swap(auxiliaryArray, j, pivotIndex);
      pivotIndex++;
    }
  }
  swap(auxiliaryArray, pivotIndex, endIndex);
  return pivotIndex;
}

// https://stackoverflow.com/questions/13766209/effective-swapping-of-elements-of-an-array-in-java
function swap(auxiliaryArray, tempfirstIndex, tempsecondIndex) {
  let temp = auxiliaryArray[tempfirstIndex];
  auxiliaryArray[tempfirstIndex] = auxiliaryArray[tempsecondIndex];
  auxiliaryArray[tempsecondIndex] = temp;
}
