<!--{ ids:[168], language:'JavaScript', type:'workshop', order: 5, name:'switch Statements I', description:'Perform actions based on different cases' } -->

### Objectives

After this exercise, you should be able to:

- Recognize a `switch` statement
- Demonstrate how to write a `switch` statement

### Example

Consider this conditional statement:

_If Mary has $6, then she can buy candy. If she has $5, then she can buy a magazine. And if she has $1, then she can buy a newspaper. Otherwise, she can buy gum._

An `if...else` statement with these conditions might look like this:

```js
var whatCanMaryBuy = function(money) {
  var item;
  if (money === 6) {
    item = "Candy!";
  } else if (money === 5) {
    item = "A magazine.";
  } else if (money === 1 ) {
    item = "A newspaper.";
  } else {
    item = "Chewing gum.";
  }
  return item;
};
```

JavaScript __`switch` statements__ accomplish the same operation with different syntax:

```js
var whatCanMaryBuy = function(money) {
  var item;
  switch (money) { // the switch expression
    case 6:
      item = "Candy!";
      break;
    case 5:
      item = "A magazine.";
      break;
    case 1:
      item = "A newspaper.";
      break;
    default:
      item = "Chewing gum.";
  }
  return item;
};
```

Here's how a `switch` statement works:

  1. The switch expression is evaluated once.
  2. The value of the expression is compared to the value of each case.
  3. If there is a match, the block of code associated with the matching case is executed and the script breaks out of the `switch` statement.

The `break` keyword is not required for the last case in a `switch` statement – it breaks (ends) there anyway.
