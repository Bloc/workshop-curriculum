<!--{ ids:[], language:'JavaScript', type:'workshop', order: 2, name:'Function Declarations', description:'Declare a function.' }-->

### Objectives

After this exercise, you should be able to:

- Declare a function

### Example

To declare a function:

1. Use the `function` keyword.
2. After `function`, name the function (with an identifier, like a variable). Function names are usually action words based on what the function does.
3. Follow the name with parentheses (`()`).
4. Then add curly braces (`{}`). Inside the curly braces is the function body, which defines the function's behavior:

```js
function greet() {
  return "Hey, what's up? How are you?";
}
```

When executed, this function does only one thing: it returns the string `"Hey, what's up? How are you?"`

A function body, however, can contain many statements, or many instructions, that a script will follow when the function is executed. When one or more statements is delimited by a set of curly braces (`{}`) it is known as a __block statement__. Block statements do not end with a semicolon.

Here's an example of a function with multiple statements:

```js
function greet() {
  var intro = "Hey, what's up?";
  var question = "How are you?";
  var greeting = intro + " " + question;
  return greeting;
}
```

### Exercise

Declare a function named `helloWorld`. This function should return the string `"Hello World!"`.
