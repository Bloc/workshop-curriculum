<!--{ ids:[165], language:'JavaScript', type:'workshop', order: 2, name:'Conditional Operator', description:'The lazy operator' }-->

### Objectives

After this exercise, you should be able to:

- Recognize the conditional operator
- Explain when to use the conditional operator
- Demonstrate how to use the conditional operator

### Example


The conditional operator (`?:`) is shorthand for an `if...else` statement. It's also known as a "ternary operator" because it takes three arguments:

1. the condition
2. the value if the condition is truthy
3. the value if the condition is falsy

```js
condition ? (value if truthy) : (value if falsy);
```

In Mary's case, if she has more than $5, then she can buy some candy. If she doesn't have enough money, then she can buy gum. Our `if...else` statement looks like this:

```js
var whatCanMaryBuy = function(money) {
  if (money > 5) {
    return "Candy!";
  } else {
    return "Chewing gum.";
  }
};
```

We can rewrite this conditional statement using many fewer lines with the conditional operator:

```js
whatCanMaryBuy = function(money) {
  return (money > 5) ? "Candy!" : "Chewing gum.";
};
```

As an expression, the conditional operator can be used to assign a value to a variable:

```js
// money is defined elsewhere
var whatCanMaryBuy = (money > 5) ? "Candy!" : "Chewing gum.";
```

### Exercise

Use the conditional operator to rewrite the `if...else` statement in the editor.
