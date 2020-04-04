export function getSelectionsortAnimations(array) {
  let animations = [];
  let auxillaryArray = array.slice();
  console.log("Original : " + array);
  selectionSort(auxillaryArray, animations);
  console.log("Sorted : " + auxillaryArray);
  return [animations, auxillaryArray];
}

function selectionSort(auxillaryArray, animations) {
  let N = auxillaryArray.length;
  for (let i = 0; i < N - 1; i++) {
    let startIndex = i;
    for (let j = i + 1; j < N; j++) {
      animations.push(["firstcomparision", j, startIndex]);
      animations.push(["secondcomparision", j, startIndex]);
      if (auxillaryArray[j] < auxillaryArray[startIndex]) startIndex = j;
    }
    animations.push(["swap", startIndex, auxillaryArray[i]]);
    animations.push(["swap", i, auxillaryArray[startIndex]]);
    if (startIndex != i) swap(auxillaryArray, startIndex, i);
  }
}
function swap(auxillaryArray, firstIndex, secondIndex) {
  let temp = auxillaryArray[firstIndex];
  auxillaryArray[firstIndex] = auxillaryArray[secondIndex];
  auxillaryArray[secondIndex] = temp;
}
