<!--{ ids:[170], language:'JavaScript', type:'workshop', order: 7, name:'switch Statements III', description:'Fallthrough: execute statements for multiple cases' }-->

### Objectives

After this exercise, you should be able to:

- Recognize "fallthrough"

### Example

If we omit both a `break` and `return` statement from a case, then the script can execute statements for multiple cases. This is known as "fallthrough" and is sometimes used as an alternative to an `if` statement that checks multiple conditions at once. For example:

```js
var isItTheWeekend = function(day) {
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

The optional `break` statement associated with each case label ensures that the script breaks out of `switch` statement once the matched statement is executed and continues execution at the statement following switch. If break is omitted, the program continues execution at the next statement in the switch statement.

Cases `"Monday"` through `"Thursday"` have neither a `break` nor `return` statement. If the name of any weekday is passed into the function, then the same message results: `"It's not the weekend. :("`. Be mindful of omitting breaks, however, as code may execute unexpectedly.

The cases for Monday through Friday in the example above are the same as an `if` statement that uses the logical or (`||`) to check multiple conditions. For example:

```js
if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
  return "It's not the weekend. :(";
}
```

### Exercise

Write a function named `getColorType`. This function should:

  - take one argument, a color
  - if the color is one of the primary colors (red, blue, yellow), the function should return the string `"The color <color> is a primary color!"`
  - if the color is one of the secondary colors (violet, green, orange), the function should return `"The color <color> is a secondary color!"`
  - if the color is something else, the function should return `"Sorry, I don't know that color."`

For example:

```js
getColorType("orange"); // returns "The color orange is a secondary color!"
```
