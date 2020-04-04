export function getInsertionsortAnimations(array) {
  let animations = [];
  let auxillaryArray = array.slice();
  console.log("Original : " + array);
  insertionSort(auxillaryArray);
  console.log("Sorted : " + auxillaryArray);
  return auxillaryArray;
}

function insertionSort(auxillaryArray) {
  for (let i = 1; i < auxillaryArray.length; ++i) {
    let key = auxillaryArray[i];
    let j = i - 1;
    while (j >= 0 && auxillaryArray[j] > key) {
      auxillaryArray[j + 1] = auxillaryArray[j];
      j = j - 1;
    }
    auxillaryArray[j + 1] = key;
  }
}
