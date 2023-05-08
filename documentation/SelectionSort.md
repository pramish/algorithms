# Selection Sort
Selection sort is a simple sorting algorithm that repeatedly selects the smallest element from the unsorted portion of the list and appends it to the end of the sorted portion.

Time complexity: Selection sort has a time complexity of O(n²), which means that the time it takes to sort the list grows quadratically with the size of the input. This makes it relatively inefficient for sorting large lists. However, it is simple to implement and can be a good choice for small lists or as a learning exercise.

Here is an example of how Selection Sort works:

```
input: [5, 1, 4, 2, 8]

iteration 1:
sorted portion: [1]
unsorted portion: [5, 4, 2, 8]

iteration 2:
sorted portion: [1, 2]
unsorted portion: [5, 4, 8]

iteration 3:
sorted portion: [1, 2, 4]
unsorted portion: [5, 8]

iteration 4:
sorted portion: [1, 2, 4, 5]
unsorted portion: [8]

iteration 5:
sorted portion: [1, 2, 4, 5, 8]
unsorted portion: []

output: [1, 2, 4, 5, 8]
```

As you can see, on each iteration, the algorithm selects the smallest element from the unsorted portion of the list and appends it to the sorted portion. After several iterations, the entire list becomes sorted.


Here is an example of how we can implement Bubble Sort in TypeScript

```typescript
/**
  This implementation takes an array of type T, as well as a comparison
  function compare that takes two elements of type T and returns a number.
  If the returned number is less than 0, the second element should come
  before the first element in the sorted array.

  The implementation works by iterating through the array and finding the
  minimum value between the current index and the end of the array. It then
  swaps the current element with the minimum element if they are not already
  in the correct order.
*/

function selectionSort<T>(unsortedArray: Array<T>, compare: (first: T, second: T) => number): Array<T> {
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

interface IPerson {
  name: string;
  age: number;
}

const people: Array<IPerson> = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 20 },
];

const sortedPeople = selectionSort(people, (first, second) => first.age - second.age);

console.log(sortedPeople);

/**
  In this example, we have an array of Person objects with name and age
  properties. We call selectionSort with this array and a comparison function
  that compares people by age. The sorted array is then logged to the
  console.

  This will output the sorted array:
  [
    { name: 'Charlie', age: 20 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 }
  ]

*/

```