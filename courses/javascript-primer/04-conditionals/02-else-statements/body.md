<!--{ ids:[164], language:'JavaScript', type:'workshop', order: 1, name:'Else Statements', description:'If this is true, do this; else, do this...' }-->

### Objectives

After this exercise, you should be able to:

- Recognize an `else` statement
- State what an `else` statement is used for

### Example

We'll extend the previous example slightly and create a more robust function.

_If Mary has more than $5, then she can buy a bag of candy. Otherwise, she can buy gum._

To accommodate this alternative, we need to modify the function:

```js
var whatCanMaryBuy = function(money) {
  if (money > 5) {
    return "Candy!";
  } else {
    return "Chewing gum.";
  }
};

whatCanMaryBuy(7); // returns "Candy!"
whatCanMaryBuy(4); // returns "Chewing gum."
```

In the example above we use an __`else` statement__ to handle the condition where `money` is _not_ greater than `5`. We don't need to specify a condition for the `else` statement because it acts as a catch-all that executes when the `if` condition isn't true. In other words, when the `if` condition is falsy, the `else` branch will execute.

Similar to the `if` body, an `else` body must open with a `{` and close with a `}` to create a block statement that groups together one or more statements.
