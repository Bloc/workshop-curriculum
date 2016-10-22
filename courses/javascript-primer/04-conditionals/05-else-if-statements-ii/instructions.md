<!--{ ids:[167], language:'JavaScript', type:'workshop', order: 4, name:'else if Statements II', description:'Evaluate many conditions' } -->

### Exercise

Write a function named `checkLock`. This function should:

  - take four arguments that are all numbers.
  - return `"correct"` if the four numbers are a valid combination.
  - return `"incorrect"` if the four numbers aren't a valid combination.

A combination is valid **if and only if all of the following conditions are met**:

  - the first number is a 3, 5, or 7 **AND**
  - the second number is 2 **AND**
  - the third number is between 5 and 100. 5 and 100 are both valid numbers **AND**
  - the fourth number is less than 9 or greater than 20. 9 and 20 are both invalid numbers.

Examples of valid combinations:
  - **(3, 2, 50, 1)**
  - **(5, 2, 5, 1)**
  - **(5, 2, 50, 1)**
  - **(7, 2, 99, 8)**
  - **(7, 2, 100, 21)**

Examples of invalid combinations (the invalid is _italicised_):
- **(_1_, 2, 50, 1)**
- **(3, _1_, 50, 1)**
- **(5, 2, _4_, 1)**
- **(5, 2, 5, _9_)**
- **(5, 2, 100, _20_)**

`checkLock` examples:

```js
checkLock(5, 2, 45, 1);  // returns "correct"
checkLock(1, 2, 45, 1);  // returns "incorrect" because the first number isn't a 3, 5, or 7
checkLock(5, 2, 45, 10); // returns "incorrect" because the fourth number is between 9 and 20
```
