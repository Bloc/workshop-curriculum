<!--{ ids:[150], language:'JavaScript', type:'workshop', order: 6, name:'Function Expressions', description:'Function expressions and function declarations are the same, but different' } -->
### Objectives

After this exercise, you should be able to:

- Recognize a function expression
- Explain how a function expression and declaration differ
- Demonstrate how to write a function expression

### Example

When an anonymous function is assigned to a variable, it creates a __function expression__. For example:

```js
var addNumbers = function(x, y) {
  return x + y;
};
```

A function expression is called the same way as a function declaration:

```js
addNumbers(3, 5); // returns 8
```

The function name in a function expression is optional. Function expressions do not require that the function be anonymous. For example:

```js
var addNumbers = function add(x, y) {
  return x + y;
};
```

As previously noted, a function declaration does not end with a semicolon. A function expression, on the other hand, _should_ end with a semicolon because it is an instruction that assigns the function to a variable.

When you're first learning JavaScript, you can treat a function declaration like `function add() {}` as equivalent to the function expression `var add = function() {};`. They do have differences, but it's not vital that you learn those differences now.
