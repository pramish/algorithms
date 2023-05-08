import { IPerson } from '../types';

export const unsortedNumberList: Array<number> = [5, 2, 9, 1, 5];

export const expectedAscendingOrderSortedNumberList: Array<number> = [1, 2, 5, 5, 9];
export const expectedDescendingOrderSortedNumberList: Array<number> = [9, 5, 5, 2, 1];

export const unsortedStringList: Array<string> = ['cat', 'apple', 'zebra', 'dog'];
export const expectedSortedAscendingOrderList = ['zebra', 'dog', 'cat', 'apple'];
export const expectedSortedDescendingOrderList = ['apple', 'cat', 'dog', 'zebra'];

export const unsortedPersonList: Array<IPerson> = [
  { name: 'Bob', age: 30 },
  { name: 'Alice', age: 24 },
  { name: 'John', age: 27 },
];

export const expectedSortedByAgeList: Array<IPerson> = [
  { name: 'Alice', age: 24 },
  { name: 'John', age: 27 },
  { name: 'Bob', age: 30 },
];

export const expectedSortedByNameList: Array<IPerson> = [
  { name: 'Alice', age: 24 },
  { name: 'Bob', age: 30 },
  { name: 'John', age: 27 },
];
