<!--{ ids:[], language:'JavaScript', type:'workshop', order: 3, name:'Call a Function', description:'Call a function.' }-->

### Objectives

After this exercise, you should be able to:

- Call a function

### Example

Recall the function we wrote to greet friends:

```js
function greet() {
  return "Hey, what's up? How are you?";
}
```

To make this function execute (run its set of instructions), you must __call__ it. You call a function by writing the function's name followed by parentheses:

```js
greet(); // returns "Hey, what's up? How are you?"
```

When we declare a function, there is no semicolon at the end of the block statement; yet when we call it, we use a semicolon.

### Exercise

Call the `helloWorld` function you wrote in the previous exercise and assign the function call to the variable `valueOfHelloWorld`.
