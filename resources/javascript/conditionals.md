<!-- { ids:[1371], name:'JavaScript: Conditionals', summary:'Conditionals: make code respond differently in different situations' } -->

__Conditional statements__ are a set of commands used to perform actions based on certain conditions. JavaScript uses `if`, `else if`, `else`, and `switch` for conditional statements. In addition, JavaScript defines the conditional operator `?:`, which serves a similar purpose, but can appear as part of an expression.

## `if` Statements

Consider the following conditional statement in English:

_If Mary has more than $5, then she can buy a bag of candy._

We can translate the statement above into a function that a computer can understand:

```js
whatCanMaryBuy = function(money) {
  if (money > 5) {
    return "Candy!";
  }
};
```

When we call the function and pass in an argument, we see how the `if` condition affects the results:

```js
// Mary has $7. Call the function, passing in 7.
whatCanMaryBuy(7); // returns "Candy!"

// Mary has $5. Call the function, passing in 5.
whatCanMaryBuy(5); // returns `undefined`
```

> Remember that in JavaScript, if nothing is explicitly returned, then the function will return `undefined`.

The code block for the `if` statement only runs if the condition (in this case, `money > 5`) evaluates to `true`. The __condition__ and __body__ are the major parts of an `if` statement. The `if` condition can contain any boolean expression, and the `if` body can contain any JavaScript code.

`if` statements do not need to be inside of a function. For example:

```js
if (2 + 2 === 5) {
  var mind = "blown";
}
```

As far as we know, `2 + 2` does _not_ equal `5`, so the body of the `if` statement does not execute, and the string `"blown"` is never assigned to the variable `mind`.

Write a few `if` statements for practice.

> Remember to press <kbd>shift</kbd> and <kbd>enter</kbd> at the same time to move to a new line in the console.

## `else` Statements

We'll extend the previous example slightly and create a more robust function.

_If Mary has more than $5, then she can buy a bag of candy. Otherwise, she can buy gum._

We need to modify our function:

```js
whatCanMaryBuy = function(money) {
  if (money > 5) {
    return "Candy!";
  } else {
    return "Chewing gum.";
  }
};

// Mary has $7. Call the function, passing in 7.
whatCanMaryBuy(7); // returns "Candy!"

// Mary has $5. Call the function, passing in 5.
whatCanMaryBuy(5); // returns "Chewing gum."
```

In the example above we use an `else` to handle the condition where `money` is not greater than `5`. We don't need to specify a condition for the `else` because it will act as a catch-all statement that will execute when the `if` condition isn't true. In other words, when the `if` statement evaluates to `false`, the `else` branch will be executed.

Similar to the `if` body, an `else` body must open with a `{` and close with a `}`.

Rewrite your practice `if` statements with new `else` statements, or write new ones altogether.

## Conditional Operator `?:`

The conditional operator `?:` can be used as a shortcut for the `if...else` statement. It's also known as a "ternary operator" because it takes _three_ arguments:

1. the condition
2. the value if the condition is true
3. the value is the condition is false

```
condition ? value if true : value if false;
```

<center>![conditional operator](https://bloc-global-assets.s3.amazonaws.com/images-frontend/screenshots/14-conditionals/conditional_op.gif)</center>

In Mary's case, if she has more than $5, then she can buy some candy. And if she doesn't have enough money, then we offer her gum instead. The following is equivalent to the code in the above `else` statements section:

```js
whatCanMaryBuy = function(money) {
  return (money > 5) ? "Candy!" : "Chewing gum.";
};
```

As an expression, the conditional operator can be used to assign a value to a variable:

```js
var money = 7;
var whatCanMaryBuy = (money > 5) ? "Candy!" : "Chewing gum.";
// assigns "Candy!" to the `whatCanMaryBuy` variable
```

Practice using the conditional operator by using it in a function as well as to assign a value to a variable.

## `else if` Statements

We can extend the function even further.

_If Mary has more than $5, then she can buy a bag of candy.
 Else, if Mary has exactly $5, then she can buy a magazine.
 Else, if Mary has more than $1, then she can buy a newspaper.
 Otherwise, she can buy gum._

```js
whatCanMaryBuy = function(money) {
  if (money > 5) {
    return "Candy!";
  } else if (money === 5) {
    return "A magazine.";
  } else if (money > 1 ) {
    return "A newspaper.";
  } else {
    return "Chewing gum.";
  }
};

whatCanMaryBuy(2000); // returns "Candy!"
whatCanMaryBuy(5);    // returns "A magazine."
whatCanMaryBuy(3);    // returns "A newspaper."
whatCanMaryBuy(1);    // returns "Chewing gum."
```

This example illustrates that we can chain `else if`s to an `if` condition to add alternate execution paths. When the program runs, these conditions will be evaluated in turn. The program will execute the code block of the first condition that evaluates to `true`. That is, only part of the program – the first part that evaluates to `true` – will ultimately be executed.

As we add more execution paths, we begin to have many `return` statements. As a general rule, it's best to limit `return` statements to just one, if possible. We can refactor the above example to:

```js
whatCanMaryBuy = function(money) {
  var item;
  if (money > 5) {
    item = "Candy!";
  } else if (money === 5) {
    item = "A magazine.";
  } else if (money > 1 ) {
    item = "A newspaper.";
  } else {
    item = "Chewing gum.";
  }
  return item;
};
```

We declare a variable named `item`. For each condition, we assign `item` a different value. At the end of the function, we return `item`, which only stores one value.

Write a conditional statement that uses `if`, `else if`, and `else`.

## `switch` Statements

Consider this conditional statement:

_If Mary has $6, then she can buy candy.
 If she has $5, then she can buy a magazine.
 And if she has $1, then she can buy a newspaper.
 Otherwise, she can buy gum._

Our `if...else...` statement might look like this:

```js
whatCanMaryBuy = function(money) {
  if (money === 6) {
    return "Candy!";
  } else if (money === 5) {
    return "A magazine.";
  } else if (money === 1 ) {
    return "A newspaper.";
  } else {
    return "Chewing gum.";
  }
};
```

A `switch` statement, however, accomplishes this in a more direct way:

```js
whatCanMaryBuy = function(money) {
  switch (money) {
    case 6:
      return "Candy!";
    case 5:
      return "A magazine.";
    case 1:
      return "A newspaper.";
    default:
      return "Chewing gum.";
  }
};
```

A `case` can be of any value type, not just a number. Here's an example where the `case`s are strings:

```js
getNinjaTurtle = function(color) {
  var name;
  switch (color) {
    case "purple":
      name = "Donatello";
      break;
    case "blue":
      name = "Leonardo";
      break;
    case "red":
      name = "Raphael";
      break;
    case "orange":
      name = "Michaelangelo";
      break;
    default:
      name = "None of the Ninja Turtles wears that color.";
      break;
  }
  return name;
};
```

The program will go directly to the `case` that corresponds to the value that was passed to the `switch` or to `default` if no match is found. At that point, statement(s) are executed until the program reaches a `break` or `return` statement.

A `return` statement will completely exit the function execution, whereas a `break` statement will break only out of the `switch` statement and allow the rest of the function execution to continue after the `switch`. Like other conditional statements, a `switch` statement can exist outside of a function and thus does not require a `return` statement.

If we omit a `break` or `return` statement, then the program can execute multiple statements. This is known as "fallthrough" and is sometimes used as an alternative to an `if` statement that specifies multiple conditions. For example:

```js
isItTheWeekend = function(day) {
  switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
      return "It's not the weekend. :(";

    case "Saturday":
    case "Sunday":
      return "It's the weekend!";

    default:
      return "Please enter the name of a day.";
  }
};
```

We've removed the `break` from cases `Monday` through `Thursday` as well as `Saturday`. If the name of any weekday is passed into the function, then the same message results – `"It's not the weekend. :("`. Be mindful of omitting `break`s, however, as code may execute unexpectedly.

The example above is the same as an `if` statement that checks multiple conditions. For example:

```js
if (day === "Saturday" || "Sunday") {
  return "It's the weekend!";
}
```

Practice creating `switch` statements.

## Style Tip

Open and close each `if`, `else if`, `else`, and `switch` statement with `{` and  `}`. Curly braces help readers find where conditional code begins and ends. Furthermore, they also help prevent bugs such as [Apple's cryptography bug](http://arstechnica.com/security/2014/02/extremely-critical-crypto-flaw-in-ios-may-also-affect-fully-patched-macs/).

## Recap

| **Concept** | **Description** |
| ----------- | --------------- |
| [`if` Statements](http://www.w3schools.com/js/js_if_else.asp) | An `if` statement executes a statement if a specified condition is true. |
| [`else` Statements](http://www.w3schools.com/js/js_if_else.asp) | A statement that is executed if a condition evaluates to false and the `else` clause exists. |
| [Conditional Operator `?:`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator) | This operator is frequently used as a shortcut for an `if` statement. |
| [`else if` Statements](http://www.w3schools.com/js/js_if_else.asp) | Use `else if` to specify a new condition to test, if the first condition is false. |
| [`switch` Statements](http://www.w3schools.com/js/js_switch.asp) | The `switch` statement is used to perform different actions based on different conditions. |
