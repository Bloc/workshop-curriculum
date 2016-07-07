In a program, it's common to perform specific tasks multiple times. Repeatedly writing the code for a task is tedious and inefficient. There's a philosophy of programming that aims to minimize repetition in a program referred to as "DRY", for "Don't Repeat Yourself".

Variables help to make code more DRY by allowing a programmer to access a single value which can be reused. Functions are another example and have a broader scope than variables. Functions are a set of instructions that encapsulate a defined behavior.

## Write a Function

Consider this code, written to pluralize two words using variable assignment and concatenation with the `+` operator:

```js
var monkey = "monkey";
var pluralizedMonkey = monkey + "s"; // stores "monkeys"

var orange = "orange";
var pluralizedOrange = orange + "s"; // stores "oranges"
```

The approach we use to pluralize "monkey" and "orange" is the same in each expression. Let's write a function that abstracts this functionality into a reusable block:

```js
function pluralize(word) {
    return word + "s"; // makes the pluralized word available after it's called
}
```

We define the function using the `function` keyword. After `function`, we name the function, which is followed by parentheses `()` and curly braces `{}`. The parentheses hold a function's __parameter(s)__, such as `word`, which create variable(s) that can be used inside of the function __body__. Inside the curly braces is the function __body__, which defines the function's behavior:

<center>![function declaration](https://bloc-global-assets.s3.amazonaws.com/images-frontend/screenshots/13-functions/function_declaration.png)</center>

Let's use our function to pluralize "monkey" and "orange":

```js
pluralize("monkey"); // returns "monkeys"
pluralize("orange"); // returns "oranges"
```

We pass the strings that we want to pluralize as arguments to the function. A __parameter__, such as `word`, is a variable created by the function definition; an __argument__, such as `"monkey"` or `"orange"`, is a value that is passed in for a parameter when the function is called. __Calling__ a function is the term for invoking a function with its arguments (if it has any). Function calls require:

- the name of the function
- followed by the parentheses
- with the argument(s) in between the parentheses (if any)

Omitting the parentheses and the argument(s) will print the function definition to the console:

```js
pluralize;           // returns the function definition
pluralize("orange"); /* calls the function and returns
                        the value after the return block */
```

<center>![pluralize function](https://bloc-global-assets.s3.amazonaws.com/images-frontend/screenshots/13-functions/function_def.gif)</center>

Practice writing functions. For example, try writing functions that:

- concatenates your first and last names, or
- performs a math operation, or
- uses a comparison or logical operator

> To move to a new line without submitting your code to the console, press <kbd>shift</kbd> and <kbd>enter</kbd> at the same time.

### Return Statement

The `return` keyword makes a value available outside the function once the function is called. If we call a function when it's assigned to a variable, the variable will store the function's returned value:

```js
var pluralizedMonkey = pluralize("monkey"); // stores "monkeys" in pluralizedMonkey
var pluralizedOrange = pluralize("orange"); // stores "oranges" in pluralizedOrange
```

A return block isn't required for a function. For example:

```js
function sayHello() {
  console.log("Hello!");
}
```

Above, we define the function without a `return` statement. When we call the function, it returns `undefined`:

```js
sayHello(); // returns undefined, prints "Hello!" to the console
```

<center>![pluralize function](https://bloc-global-assets.s3.amazonaws.com/images-frontend/screenshots/13-functions/function_no_return.gif)</center>

The `console.log()` function doesn't return a value; it only prints the values passed to it and returns `undefined`.

Two other behaviors are notable about the above code:

  - We define the `sayHello` function without parameters by leaving the space in between the parentheses blank. Parameters are not required to define a function.
  - When we declare the function, there is no semicolon at the end of it, yet when we call it, we use a semicolon. A function _call_ is an expression and should end with a semicolon. A function _declaration_ is not an expression and should not end with a semicolon.

> JavaScript will sometimes infer a semicolon at the end of expressions. It is bad practice, however, to omit a semicolon because of this inference. You should always follow expressions with a semicolon.

Define and call two functions: one with a `return` statement and one without.

## Define a Function Expression

We can also define functions by assigning an __anonymous function__ to a variable. An anonymous function is a function without a declared name. For example:

```js
var add = function(x, y) {
  return x + y;
};

add(3, 5); // returns 8
```

This is known as a __function expression__. Assigning a value to a variable is an expression, thus assigning a function to a variable must end in a semicolon.

<center>![function expression](https://bloc-global-assets.s3.amazonaws.com/images-frontend/screenshots/13-functions/function_expression.png)</center>

A function declaration like `function add() {}` is equivalent to the function expression `var add = function() {};`. When you're first learning JavaScript you can treat these as equal.

Practice creating function expressions.

## Invoke a Function within Other Functions

Function definitions can invoke other functions within them. Consider the following code:

```js
function sayHello() {
  return "Hello";
}

function greet(name) {
  return sayHello() + " " + name;
}
```

The `greet` function invokes the `sayHello` function inside its return statement. Calling `greet()` with a name passed in returns a string with the value of `name` concatenated to the return value of `sayHello()`:

```js
greet("Mike"); // returns "Hello Mike"
```

Practice invoking a function within another function.

## Recap

| **Concept** | **Description** |
| ----------- | --------------- |
| [DRY](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself) | Don't Repeat Yourself – a philosophy of programming that aims to minimize repetition. |
| [Functions](http://www.w3schools.com/js/js_functions.asp) | A function is a block of code designed to perform a particular task. Functions are either named (function declaration) or anonymous (function expression).|
