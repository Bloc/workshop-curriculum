<!--{ ids:[190], language:'JavaScript', type:'workshop', order: 0, name:'For Loops', description:'Iterate on a collection of values or objects' }-->

### Objectives

After this exercise, you should be able to:

- Recognize a `for` loop
- State what a `for` loop is used for
- Demonstrate how to write a `for` loop

### Example

A loop is a scripting construct that executes code a certain number of times, usually by iterating on a collection of values or objects. The code continues to execute (or loops) as long as its condition evaluates to truthy.

In JavaScript, there are four types of loops:

1. `for`
2. `for...in`
3. `while`
4. `do...while`

When we know the exact number of times a block of code must execute, we use a __`for` loop__. For that reason, iteration in `for` loops is usually controlled by a variable that tracks the number of executions.

Consider the `for` loop below:

```js
for (var i = 0; i < 10; i++) {
  console.log("We're on index number " + i); // print a string to the console
}
```

The output of this loop looks like this:

![printing the for loop](https://bloc-global-assets.s3.amazonaws.com/workshop/javascript/for-loop.gif)

This particular loop:

1. `var i = 0`: Starts at `0`.
2. `i < 10`: Continues to loop as long as `i` is less than `10`.
3. `i++`: Increases `i` by `1` each time the loop runs. (When `i` has a value of `10`, the loop stops.)

A `for` loop is declared using the `for` keyword followed by a set of optional expressions separated by a semicolon and enclosed in parentheses. These expressions determine how the loop runs. The curly braces create a block statement comprised of one of more statements that execute at each turn of the loop.

The three optional expressions are:

| Order | Expression         | Example      | Description |
| ----- | ------------------ | ------------ | ----------- |
| 1     | _initialization_   | `var i = 0;` | Typically used to initialize a counter variable, such as `i`, whose value changes after each execution based on the _final-expression_. The variable can be used within the loop's block statement. |
| 2     | _condition_        | `i < 10;`    | Evaluated before each loop iteration. If this expression evaluates to `true`, the loop body is executed. If omitted, the condition always evaluates to `true`.
| 3     | _final-expression_ | `i++`        | Evaluated at the end of each loop iteration. Generally used to update or increment the counter variable. |
