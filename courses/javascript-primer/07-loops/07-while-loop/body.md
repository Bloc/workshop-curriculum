<!--{ ids:[197], language:'JavaScript', type:'workshop', order: 6, name:'While Loops', description:'When you don't know how many times a loop should run, use a while loop' }-->

### Objectives

After this exercise, you should be able to:

- Recognize a `while` loop
- Explain what a `while` loop is used for
- Write a `while` loop

### Example

The `while` loop is most commonly used when it is unclear how many times a loop must run. Like a `for` loop, a `while` loop runs until a certain condition is no longer true. This means that all `for` loops can be re-written as `while` loops. Here's our first `for` loop turned into a while loop:

```js
var i = 0;

while (i < 10) {
  console.log("We're on index number " + i);
  i++;
}
```

The loop runs as long as the condition to the right of the `while` keyword evaluates as truthy. Variable creation and assignment must be done before the while loop is declared. Changes to the counter variable (`i`) must be made within the body of the loop.

Although we can rewrite any `for` loop as a `while` loop, a `while` loop does not require a counter variable. For example:

```js
while (true === true) {
  console.log("Beware... I'm an infinite loop.");
}
```

We can check any condition and execute any statement. The above example, however, creates an infinite loop. If you create an infinite loop, you'll likely need to quit the script by force (i.e. close the browser).

### Exercise

Write a function called `indexToString`. This function should:

  - take an array as an argument
  - create and return a new array of all passed array elements as strings
  - each strings should be formatted like so: "[index] is [element at index]"

For example:

```js
indexToString([1, 2, 3]); // returns ["0 is 1", "1 is 2", "2 is 3"]
indexToString(['My', 1, 'number']); // returns ["0 is My", "1 is 1", "2 is number"]
```
