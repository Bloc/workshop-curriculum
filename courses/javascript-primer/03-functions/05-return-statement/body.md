<!--{ ids:[148], language:'JavaScript', type:'workshop', order: 4, name:'`return` statement', description:'Stop a function's execution' }-->

### Objectives

After this exercise, you should be able to:

- Explain what a `return` statement does

### Example

Let's look again at our `greet` function:

```js
function greet(name) {
  return "Hey, what's up " + name + "? How are you?";
}
```

The `return` keyword creates a __`return` statement__, which stops the execution of a function.

If a value is specified in the `return` statement, then the value is returned to the function caller. If no value is specified (e.g. `return;`), then `undefined` is returned instead.

The `return` keyword makes a value available outside of a function after the function executes. If we call a function when it's assigned to a variable, the variable will store the function's returned value:

```js
var greetTara = greet("Tara"); // returns "Hey, what's up Tara? How are you?"
var greetJose = greet("Jose"); // returns "Hey, what's up Jose? How are you?"
```

While functions commonly have a `return` statement, it isn't a requirement for functions. You can write a function that does not return anything.
