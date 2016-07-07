Refactor the "Looping Over Arrays" exercises to use `while` loops instead of `for` loops. As a refresher:

1. Write a function called `sumNumbers`. This function should:
    - return the sum of all numbers inside of the array that is passed to the function
    - return 0 if the array is empty

    For example:

    ```js
    sumNumbers([1, 2, 3]); // returns 6
    ```

2. Write a function called `indexToString`. This function should:
    - create and return a new array of all inputs as strings
    - each of the new strings should start with "[index] is [data element at index]"

    For example:

    ```js
    indexToString([1, 2, 3]) // returns ["0 is 1", "1 is 2", "2 is 3"]
    indexToString(['My', 1, 'number']) // returns ["0 is My", "1 is 1", "2 is number"]
    ```
