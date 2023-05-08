/**

Sorts an array in ascending order using the selection sort algorithm.
@template T - The type of the elements in the array.
@param {Array<T>} unsortedArray - The array to be sorted.
@param {(first: T, second: T) => number} compare - A function that compares two elements and returns a negative number if the first is smaller, a positive number if the first is larger, or zero if they are equal.
@returns {Array<T>} - The sorted array.
@example
const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArr = selectionSort(arr, (a, b) => a - b);
console.log(sortedArr); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
*/

export function selectionSort<T>(unsortedArray: Array<T>, compare: (first: T, second: T) => number): Array<T> {
  const length = unsortedArray.length;
  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < length; j++) {
      if (compare(unsortedArray[j], unsortedArray[minIndex]) < 0) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const temp = unsortedArray[i];
      unsortedArray[i] = unsortedArray[minIndex];
      unsortedArray[minIndex] = temp;
    }
  }
  return unsortedArray;
}
