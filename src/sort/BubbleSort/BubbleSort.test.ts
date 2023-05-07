import { describe, expect, test } from '@jest/globals';

import { bubbleSort } from './BubbleSort';

import {
  unsortedNumberList,
  expectedAscendingOrderSortedNumberList,
  expectedDescendingOrderSortedNumberList,
  unsortedStringList,
  expectedSortedAscendingOrderList,
  expectedSortedDescendingOrderList,
  unsortedPersonList,
  expectedSortedByAgeList,
  expectedSortedByNameList,
} from './Mocks';

describe('Bubble Sort', () => {
  test('Should sort a array of numbers in ascending order.', () => {
    const sortedArray = bubbleSort(unsortedNumberList, (a, b) => a - b);
    expect(sortedArray).toEqual(expectedAscendingOrderSortedNumberList);
  });
  test('Should sort a array of numbers in descending order.', () => {
    const sortedArray = bubbleSort(unsortedNumberList, (a, b) => b - a);
    expect(sortedArray).toEqual(expectedDescendingOrderSortedNumberList);
  });

  test('Should sort a array of strings in ascending order.', () => {
    const sortedArray = bubbleSort(unsortedStringList, (a, b) => b.localeCompare(a));

    expect(sortedArray).toEqual(expectedSortedAscendingOrderList);
  });

  test('Should sort a array of strings in descending order.', () => {
    const sortedArray = bubbleSort(unsortedStringList, (a, b) => a.localeCompare(b));

    expect(sortedArray).toEqual(expectedSortedDescendingOrderList);
  });

  test('Should sort a array of persons according to their name.', () => {
    const sortedArray = bubbleSort(unsortedPersonList, (a, b) => a.name.localeCompare(b.name));

    expect(sortedArray).toEqual(expectedSortedByNameList);
  });

  test('Should sort a array of persons according to their age.', () => {
    const sortedArray = bubbleSort(unsortedPersonList, (a, b) => a.age - b.age);

    expect(sortedArray).toEqual(expectedSortedByAgeList);
  });

  test('Should return empty array if empty array is provided.', () => {
    const emptyArray: Array<number> = [];
    const sortedArray = bubbleSort(emptyArray, (a, b) => a - b);

    expect(sortedArray).toEqual(emptyArray);
  });

  test('Should return one element when provided with only one value.', () => {
    const unsortedArray = [1];
    const expectedSortedArray = [1];
    const sortedArray = bubbleSort(unsortedArray, (a, b) => a - b);
    expect(sortedArray).toEqual(expectedSortedArray);
  });
});
