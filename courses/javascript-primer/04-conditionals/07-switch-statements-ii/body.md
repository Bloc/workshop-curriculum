<!--{ ids:[169], language:'JavaScript', type:'workshop', order: 6, name:'switch Statements II', description:'A break statement is different from a return statement' }-->

### Objectives

After this exercise, you should be able to:

- Explain what a `break` statement is used for
- Explain the difference between a `break` statement and a `return` statement

### Example

```js
var getNinjaTurtleName = function(color) {
  var name;
  switch (color) {
    case "purple":
      name = "Donatello";
      break;
    default:
      name = "None of the Ninja Turtles wears that color.";
  }

  // rest of function code goes here

  return name;
};
```

When the script enters the `switch` statement, it will go directly to the case that corresponds to the value passed to the `switch` expression; if no match is found, then it goes to the default case. At that point, statement(s) are executed until the script reaches a `break` statement, `return` statement, or the end of the `switch` statement.

A `return` statement completely exits the function execution, whereas a `break` statement breaks only out of the `switch` statement and allows the rest of the function execution to continue after the switch.

Like other conditional statements, a `switch` statement can exist outside of a function.
