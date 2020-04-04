export function getSelectionsortAnimations(array) {
  //let animations = [];
  let auxillaryArray = array.slice();
  console.log("Original : " + array);
  selectionSort(auxillaryArray);
  console.log("Sorted : " + auxillaryArray);
  return auxillaryArray;
}

function selectionSort(auxillaryArray) {
  let N = auxillaryArray.length;
  for (let i = 0; i < N - 1; i++) {
    let startIndex = i;
    for (let j = i + 1; j < N; j++)
      if (auxillaryArray[j] < auxillaryArray[startIndex]) startIndex = j;
    swap(auxillaryArray, startIndex, i);
  }
}
function swap(auxillaryArray, firstIndex, secondIndex) {
  let temp = auxillaryArray[firstIndex];
  auxillaryArray[firstIndex] = auxillaryArray[secondIndex];
  auxillaryArray[secondIndex] = temp;
}
