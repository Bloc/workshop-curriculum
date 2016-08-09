<!--{ ids:[167], language:'JavaScript', type:'workshop', order: 4, name:'else if Statements II', description:'Evaluate many conditions' } -->

### Exercise

Write a function named `checkLock`. This function should:

  - take four arguments that are all numbers
  - return `"correct"` if the four numbers are a valid combination
  - return `"incorrect"` if the four numbers aren't a valid combination

A combination is valid __if__:

  - the first number is a 3, 5, or 7, __and__
  - the second number is 2, __and__
  - the third number is between 5 and 100. 5 and 100 are both valid numbers, __and__
  - the fourth number is less than 9 or greater than 20. 9 and 20 are both invalid numbers

For example:

```js
checkLock(5, 2, 45, 1);  // returns "correct"
checkLock(1, 2, 45, 1);  // returns "incorrect" because the first number isn't a 3, 5, or 7
checkLock(5, 2, 45, 10); // returns "incorrect" because the fourth number is between 9 and 20
```
