<!--{ ids:[198], language:'JavaScript', type:'workshop', order: 7, name:'Do...While Loops', description:'Similar to a while loop, but runs at least once no matter what' }-->

### Objectives

After this exercise, you should be able to:

- Recognize a `do...while` loop
- Explain the difference between a `while` loop and a `do...while` loop
- Demonstrate how to write a `do...while` loop

### Example

The `do...while` loop is an antiquated looping pattern that executes code in a similar way to the `while` loop. Code is executed in a `do` block, and conditions for execution are set after the loop. Here's how we'd rewrite the previous while loop using the `do...while` syntax:

```js
var i = 0;

do {
  console.log("We're on index number " + i);
  i++;
} while (i < 10);
```

The only major difference between the `while` and the `do...while` is the time at which the conditions for exiting the loop are checked. `while` loops check if the condition is true _before_ the loop body runs, and the `do...while` loop checks _after_ the loop body runs. This means that a `do...while` code block will always execute at least once.

### Exercise

Write a function called `addToArray`. This function should:

  - take two arguments, `num1` and `num2`
  - use a `do...while` loop to add each number from `num1` to `num2` to an array

For example:

```js
addToArray(3,7); // returns [3,4,5,6,7]
addToArray(2,2); // returns [2]
```
