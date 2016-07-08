<!--{ ids:[166], language:'JavaScript', type:'workshop', order: 3, name:'else if Statements I', description:'When two conditions aren't enough' }-->

### Objectives

After this exercise, you should be able to:

- Recognize an `else if` statement
- Explain what an `else if` statement is used for
- Write an `else if` statement

### Example

We can extend an `if...else` statement even further.

_If Mary has more than $5, then she can buy a bag of candy. Else, if Mary has exactly $5, then she can buy a magazine. Else, if Mary has more than $1, then she can buy a newspaper. Otherwise, she can buy gum._

We can use `else if` statements to handle these additional conditions:

```js
var whatCanMaryBuy = function(money) {
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

whatCanMaryBuy(9); // returns "Candy!"
whatCanMaryBuy(5); // returns "A magazine."
whatCanMaryBuy(3); // returns "A newspaper."
whatCanMaryBuy(1); // returns "Chewing gum."
```

When this script runs, the conditions will be evaluated one-by-one, and the body of the first condition that evaluates as truthy will execute. That is, only part of the script – the first part that evaluates as truthy – will ultimately be executed.

As we add more execution paths, we begin to have many `return` statements. As a general rule, it's best to limit a function to just one `return` statement. We can refactor the function to have just one `return` statement:

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

We declare a variable named `item` outside of the `if...else` statement. For each condition, we assign `item` a different value. At the end of the function, we return `item`, which only stores one value.

### Exercise

Update the `greet` function. If the hour is:

  - before noon, return `"Good morning!"`
  - after noon _and_ the hour is before 6 p.m., return `"Good afternoon!"`
  - after 6 p.m., return `"Good evening!"`

Remember we are basing the hour on the 24-hour clock.
