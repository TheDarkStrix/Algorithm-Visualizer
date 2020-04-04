export function getInsertionsortAnimations(array) {
  let animations = [];
  let auxillaryArray = array.slice();
  console.log("Original : " + array);
  insertionSort(auxillaryArray, animations);
  console.log("Sorted : " + auxillaryArray);
  return [animations, auxillaryArray];
}

function insertionSort(auxillaryArray, animations) {
  const N = auxillaryArray.length;
  for (let i = 1; i < N; i++) {
    let key = auxillaryArray[i];
    let j = i - 1;
    //this is need to identify the lines that are being compared , to identify we pass the string with the array , the color is then set according to the string
    animations.push(["firstcomparision", j, i]);
    animations.push(["secondcomparision", j, i]);
    while (j >= 0 && auxillaryArray[j] > key) {
      animations.push(["overwrite", j + 1, auxillaryArray[j]]);
      auxillaryArray[j + 1] = auxillaryArray[j];
      j = j - 1;
      if (j >= 0) {
        animations.push(["firstcomparision", j, i]);
        animations.push(["secondcomparision", j, i]);
      }
    }
    animations.push(["overwrite", j + 1, key]);
    auxillaryArray[j + 1] = key;
  }
}
