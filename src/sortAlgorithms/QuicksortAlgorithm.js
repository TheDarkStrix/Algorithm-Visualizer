export function getQuickSortAnimations(array) {
  let animations = [];
  let auxillaryArray = array.slice();
  quickSort(auxillaryArray, 0, auxillaryArray.length - 1, animations);
  return [animations, auxillaryArray];
}

function quickSort(auxillaryArray, startIndex, endIndex, animations) {
  let pivotIndex;
  if (startIndex < endIndex) {
    pivotIndex = partitionArray(
      auxillaryArray,
      startIndex,
      endIndex,
      animations
    );
    quickSort(auxillaryArray, startIndex, pivotIndex - 1, animations);
    quickSort(auxillaryArray, pivotIndex + 1, endIndex, animations);
  }
}

function partitionArray(auxillaryArray, startIndex, endIndex, animations) {
  let pivot = auxillaryArray[endIndex];
  let pivotIndex = startIndex;
  for (let i = startIndex; i <= endIndex - 1; i++) {
    animations.push([i, endIndex]);
    animations.push([i, endIndex]);
    if (auxillaryArray[i] <= pivot) {
      //Swap the bar heights
      animations.push([i, auxillaryArray[pivotIndex]]);
      animations.push([pivotIndex, auxillaryArray[i]]);
      swap(auxillaryArray, i, pivotIndex);
      pivotIndex++;
    } else {
      animations.push([-1, -1]);
      animations.push([-1, -1]);
    }
    animations.push([-1, -1]);
    animations.push([-1, 0]);
  }
  animations.push([0, 0]);
  animations.push([0, 0]);
  animations.push([0, 0]);
  animations.push([0, 0]);
  //Swap the bar heights
  animations.push([pivotIndex, auxillaryArray[endIndex]]);
  animations.push([endIndex, auxillaryArray[pivotIndex]]);
  swap(auxillaryArray, pivotIndex, endIndex);
  return pivotIndex;
}

function swap(auxillaryArray, firstIndex, secondIndex) {
  let temp = auxillaryArray[firstIndex];
  auxillaryArray[firstIndex] = auxillaryArray[secondIndex];
  auxillaryArray[secondIndex] = temp;
}
