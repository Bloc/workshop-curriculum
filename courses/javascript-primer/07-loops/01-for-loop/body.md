<!--{ ids:[190], language:'JavaScript', type:'workshop', order: 0, name:'For Loops', description:'Iterate on a collection of values or objects' }-->

### Objectives

After this exercise, you should be able to:

- Recognize a `for` loop
- State what a `for` loop is used for
- Write a `for` loop

### Example

A loop is a scripting construct that executes code a certain number of times, usually by iterating on a collection of values or objects. The code continues to execute (or loops) as long as its condition evaluates as truthy.

In JavaScript, there are four types of loops:

1. `for`
2. `for...in`
3. `while`
4. `do...while`

When we know the exact number of times a block of code must execute, we use a __`for` loop__. For that reason, iteration in `for` loops is usually controlled by a variable that tracks the number of executions.

Consider the `for` loop below:

```js
for (var i = 0; i < 10; i++) {
  // statement(s)
}
```

A `for` loop is declared using the `for` keyword. The keyword is followed by a set of optional expressions separated by a semicolon and enclosed in parentheses. These expressions determine how the loop will run. The curly braces create a block statement comprised of one of more statements that execute at each turn of the loop.

The three optional expressions are:

| Order | Expression         | Example      | Description |
| ----- | ------------------ | ------------ | ----------- |
| 1     | _initialization_   | `var i = 0;` | Typically used to initialize a counter variable, such as `i`, whose value changes after each execution based on the _final-expression_. |
| 2     | _condition_        | `i < 10;`    | Evaluated before each loop iteration. If this expression evaluates to true, the loop body is executed. If omitted, the condition always evaluates to true.
| 3     | _final-expression_ | `i++`        | Evaluated at the end of each loop iteration. Generally used to update or increment the counter variable. |

We can use the `console.log()` function to print the current index of the loop:

```js
for (var i = 0; i < 10; i++) {
  console.log("We're on index number " + i);
}
```

The output of this loop should look like this:

![printing the for loop](https://bloc-global-assets.s3.amazonaws.com/workshop/javascript/for-loop.gif)

### Exercise

Write a function called `addToArray`. This function should:

  - take two arguments, `num1` and `num2`
  - use a `for` loop to add each number from `num1` to `num2` to an array

For example:

```js
addToArray(3,7); // returns [3,4,5,6,7]
```
