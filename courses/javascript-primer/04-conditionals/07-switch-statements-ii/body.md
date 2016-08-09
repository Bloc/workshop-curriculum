<!--{ ids:[169], language:'JavaScript', type:'workshop', order: 6, name:'switch Statements II', description:'A break statement is different from a return statement' } -->
### Objectives

After this exercise, you should be able to:

- Explain what a `break` statement is used for
- Explain the difference between a `break` statement and a `return` statement

### Example

```js
var morpheusAsks = function(answer) {
  var reality;
  switch (answer) {
    case "red pill":
      reality = "painful truth";
      break;
    default:
      reality = "blissful ignorance";
  }

  // rest of function code goes here

  return reality;
};
```

When the script enters the `switch` statement, it will go directly to the case that corresponds to the value passed to the `switch` expression; if no match is found, then it goes to the default case. Wherever the script enters the `switch`, statement(s) are executed until the script reaches a `break` statement, `return` statement, or the end of the `switch` statement.

A `return` statement completely exits the function execution, whereas a `break` statement breaks only out of the `switch` statement and allows the rest of the function execution to continue after the switch.

Like all conditional statements, a `switch` statement can exist outside of a function.
