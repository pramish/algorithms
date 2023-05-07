# algorithms

This is a collection of algorithms implemented in TypeScript. This package is still a work in progress and will be updated regularly with new algorithms.

> The primary objective of creating this npm package is to facilitate the community in using a collection of algorithms that I am learning while studying data structures and algorithms. I believe that by making these algorithms more accessible and easier to use, I can contribute to the learning and growth of the developer community. As a learner, I am constantly working on improving my skills, and I hope that this package will not only help others but also help me solidify my understanding of these algorithms.


## Installation

To install this package, you can use either `npm or yarn`:

```
npm install algorithms-using-typescript
```

OR

```
yarn add algorithms-using-typescript
```

### Usage

### Bubble sort algorithm

```typescript
import { bubbleSort } from 'algorithms-using-typescript';

const unSortedArray:Array<number> = [5, 2, 7, 1, 8, 9];
const sortedArray:Array<number> = bubbleSort(arr);

console.log(sortedArr); // [1, 2, 5, 7, 8, 9]
```

## Available Algorithms
1. Sort
    - Bubble sort
    - Selection sort
    - Insertion sort
    - Merge sort
    - Quick sort

## Contributing

This package is open to contributions! If you would like to contribute, please follow these steps:

- Fork this repository
- Create a branch with your `feature/fix`
    1. At first create a [issue](https://github.com/pramish/algorithms/issues) here.
    2. It will then give you the issue number. Using that issue number, please create your branch as follows

        ```
        <!-- Feature -->
        feature/algo-{number}-{description}

        For example: feature/algo-1-App-scaffold

        <!-- bug -->
        fix/algo-{number}-{description}

        For example: fix/algo-2-Bubble-sort-test-not-accepting-string-data
        ```
- Install dependencies with `npm/yarn` install
- Make your changes
- Test your changes with `npm/yarn` test
- Commit your changes with a descriptive message
- Push your changes to your forked repository
- Open a pull request.
- Once your issue has been merged, you can close this issue.

## Credits
This package is created and maintained by [myself](https://www.linkedin.com/in/pramish-luitel/) 👋