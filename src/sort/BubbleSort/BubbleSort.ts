/**
 * Sorts an array using the bubble sort algorithm.
 * @param unsortedArray - The array to be sorted.
 * @param compare - The comparison function used to determine the order of the elements. It should return a negative number if `a` should be before `b`, 0 if they are equal, or a positive number if `a` should be after `b`.
 * @returns A new sorted array with the same elements as the original array.
 *
 * @example
 * ```
 * const arr = [5, 2, 7, 1, 8, 9];
 * const sortedArr = bubbleSort(arr, (a, b) => a - b);
 * console.log(sortedArr); // Output: [1, 2, 5, 7, 8, 9]
 * ```
 */

export function bubbleSort<T>(unsortedArray: Array<T>, compare: (a: T, b: T) => number): Array<T> {
  const length = unsortedArray.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (compare(unsortedArray[j], unsortedArray[j + 1]) > 0) {
        const temp = unsortedArray[j];
        unsortedArray[j] = unsortedArray[j + 1];
        unsortedArray[j + 1] = temp;
      }
    }
  }
  return unsortedArray;
}
