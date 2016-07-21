<!--{ ids:[134], language:'JavaScript', type:'workshop', order: 9, name:'Variables III', description:'Change the value of a variable' }-->

### Objectives

After this exercise, you should be able to:

- Demonstrate how to change the value of a variable

### Example

A variable is just that: variable – its value can change. To update the value of a variable, use the assignment operator (`=`) the same way it's used to initially assign a value to a variable:

```js
var favoriteColor = "blue";
favoriteColor = "red";
```

When a script containing this code runs, the last assigned value, `red`, is the value the variable `favoriteColor` will hold.

In fact, when a variable is declared without a value, it actually gets a default value of `undefined`, which is another JavaScript data type. When you later assign a value to that variable, you are actually updating its value from `undefined`:

```js
var favoriteColor;     // evaluates to undefined
favoriteColor = "red"; // evaluates to "red"
```
