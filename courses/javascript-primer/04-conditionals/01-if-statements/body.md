<!--{ ids:[163], language:'JavaScript', type:'workshop', order: 0, name:'if Statements', description:'If this is true, then do this...' } -->
### Objectives

After this exercise, you should be able to:

- Recognize an `if` statement
- State what an `if` statement is used for

### Example

Consider the following conditional statement in English:

_If Mary has more than $5, then she can buy a bag of candy._

We can translate this statement into a function that a computer can understand:

```js
var whatCanMaryBuy = function(money) {
  if (money > 5) {
    return "Candy!";
  }
};
```

The `if` keyword begins an __`if` statement__, whereby a condition or value is evaluated, and if the condition is truthy, then specified code will execute. When we call the function and pass in an argument, we see how the condition (whether or not Mary has more than $5) affects the results:

```js
whatCanMaryBuy(7); /* 7 is greater than 5
                      returns "Candy!" */

whatCanMaryBuy(5); /* 5 is not greater than 5
                      returns undefined */
```

The body of the `if` statement only runs if the condition (in this case, `money > 5`) evaluates to truthy. The condition can contain any boolean expression, and the body, like any block statement, can contain any JavaScript code.

`if` statements do not need to be inside of a function. For example:

```js
if (2 + 2 === 5) {
  var mind = "blown";
}
```

As far as we know, 2 + 2 does not equal 5, so the body of the `if` statement does not execute, and the string `"blown"` is never assigned to the variable `mind`.
