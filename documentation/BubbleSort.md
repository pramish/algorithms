# Bubble Sort:

Bubble sort is a simple sorting algorithm that repeatedly iterates through the list of elements, compares adjacent elements, and swaps them if they are in the wrong order. This process continues until the list is completely sorted.

Time complexity: Bubble sort has a time complexity of O(n²), which means that the time it takes to sort the list grows quadratically with the size of the input. This makes it relatively inefficient for sorting large lists. Because of its relatively high time complexity, bubble sort is generally not considered to be a good choice for sorting large lists.

Here is an example of how bubble sort works:

```
input: [5, 1, 4, 2, 8];

iteration 1:
[1, 5, 4, 2, 8]
[1, 4, 5, 2, 8]
[1, 4, 2, 5, 8]
[1, 4, 2, 5, 8]

iteration 2:
[1, 4, 2, 5, 8]
[1, 2, 4, 5, 8]
[1, 2, 4, 5, 8]

iteration 3:
[1, 2, 4, 5, 8]
[1, 2, 4, 5, 8]

output: [1, 2, 4, 5, 8]
```

Here is an example of how we can implement Bubble Sort in TypeScript

```typescript
/**

    The code below shows an implementation of the bubble sort algorithm in
    TypeScript, which sorts an array of elements of type T. The function takes
    two parameters: the first parameter is the array to be sorted, and the second
    parameter is a function compare that takes two elements of type T and returns
    a number. If the returned number is less than 0, then the first element
    should come before the second element in the sorted array.

    Inside the function, we use two nested loops to iterate through the array.
    In the outer loop, we loop through the array once for each element, starting
    with the first element and ending with the last element. In the inner loop,
    we loop through the array from the first element to the second-to-last element.

    Inside the inner loop, we compare each pair of adjacent elements using the
    compare function. If the first element in the pair should come after the
    second element in the sorted array (i.e. if compare returns a number greater
    than 0), then we swap the two elements in the array.

    After the inner loop finishes, the largest element in the unsorted part of
    the array will have "bubbled up" to the end of the array. We repeat this
    process for the remaining unsorted elements until the array is completely
    sorted.

    The code also includes an example usage of the bubbleSort function.
    It creates an array of IPerson objects with name and age properties, and
    calls the bubbleSort function with this array and a comparison function that
    compares people by age. The sorted array is then logged to the console.
*/


function bubbleSort<T>(unsortedArray: Array<T>, compare: (a: T, b: T) => number): Array<T> {
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

interface IPerson {
  name: string;
  age: number;
}

const people: Array<IPerson> = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 20 },
];

const sortedPeople = bubbleSort(people, (first, second) => first.age - second.age);

console.log(sortedPeople);

/**

  This will output the sorted array:

  [
    { name: 'Charlie', age: 20 },
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 }
  ]

*/
```
