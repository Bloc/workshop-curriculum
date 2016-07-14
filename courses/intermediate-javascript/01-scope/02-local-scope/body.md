<!-- { ids:[], language:'JavaScript', type:'workshop', order: 1, name:'Local Scope', description:'A function creates its own local scope' }-->

### Objectives

- Recognize when a variable is in a local scope
- Discuss the difference between global and local scope

### Example

Variables declared in the global scope are properties of the global object to which the entire script has access. Variables declared inside of functions, however, are local variables to which access is limited. Functions create their own scope, known as __local scope__.

Consider the following code:

```js
var newYorkCity = function() {
  var localString = "I exist in New York City!";
  return localString;
};

newYorkCity(); // returns "I exist in New York City!"
```

When you define a function, the curly braces (`{}`) create a block that mark the start and end of the function's local scope. `localString`, therefore, is part of `newYorkCity`'s local scope; it does not exist in the global scope.

Now consider:

```js
var globalString = "I exist globally!";

var newYorkCity = function() {
  var localString = "I exist in New York City!";
  return globalString + " and " + localString;
};

newYorkCity();            /* returns "I exist globally! and
                                      I exist in New York City!" */
console.log(localString); // ReferenceError: localString is not defined
```

Calling `newYorkCity()` returns the values of both `globalString` and `localString`; `newYorkCity`, then, can access its own local scope as well as the global scope.

When we log the value of `localString` to the console in the global scope, however, we get an error because the variable does not exist on the global object. We can only access `localString` from inside the `newYorkCity` function.

### Exercise

1. Declare a variable named `isGreat` in the local scope of `getCity`.
2. Assign this variable the string `" is a great city!"`.
3. Update the function's `return` statement so that the function returns `<city> is a great city!`

For example:

```js
getCity("Rivendell"); // returns "Rivendell is a great city!"
```
