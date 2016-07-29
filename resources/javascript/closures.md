<!-- { ids:[1378], name:'JavaScript: Scopes and Closures', summary:'Scopes and Closures: determine what variables a function can access' } -->

Recall that the context of a function is the value of that function's `this`, which is bound to the object that invokes the function. Context, then, is determined when the function is invoked.

Scope, on the other hand, is determined when a function is declared (written). __Scope__ determines which variables a function can access.

## Scopes

The JavaScript scope model is known as __lexical scope__, where code may only access variables defined in the same block. There are two scopes: global and local. Variables declared in the __global scope__, outside of any functions, are properties of the global object to which all functions in the program have access.

```js
var globalString = "I exist globally!";
```

Variables declared inside of functions (__local scope__), however, are local variables to which access is limited.

```js
var newYorkCity = function() {
  var localString = "I exist in New York City!";
};
```

Consider the following code:

```js
var globalString = "I exist globally!";

var newYorkCity = function() {
  var localString = "I exist in New York City!";
  console.log(localString, globalString);
};

newYorkCity();            // prints "I exist in New York City!"
                          //        "I exist globally!"
console.log(localString); // ReferenceError: localString is not defined
```

When we invoke the `newYorkCity()` function, we see that it successfully logs both strings to the console. This is because `newYorkCity()` has access to its own (local) scope, as well as the global scope.

However, when we attempt to log the value of `localString` to the console while in the global context, we get an error because the variable does not exist on the global object where the `console.log()` method is being invoked. `localString` is not within the scope of the global object.

Furthermore, functions nested inside other functions create nested scopes and varying degrees of locality. That is, global variables are always global, but local variables are relative to the immediate functions in which they are declared.

Consider:

```js
var globalString = "I exist globally!";

// #1
var newYorkCity = function() {
  var localString = "I exist in New York City!";
  console.log(localString, globalString);

  // #2
  var centralPark = function() {
    var localString = "I exist in Central Park!";
    console.log(localString, globalString);
  };

  // #3
  centralPark(); // invoke `centralPark()` when `newYorkCity()` is invoked
};

newYorkCity(); // prints "I exist in New York City!"
               //        "I exist globally!"
               //        "I exist in Central Park!"
               //        "I exist globally!"
centralPark(); // ReferenceError: centralPark is not defined
```

`centralPark` (at __#2__) is a function nested in `newYorkCity` (at __#1__) and is only available within the body of the `newYorkCity` function. When we attempt to call `centralPark()` in the global context we get an error. The global object does not have access to the `newYorkCity()` function's local scope.

`newYorkCity()` and `centralPark()` both have local variables named `localString`. When `newYorkCity()` attempts to log `localString`, it searches its local scope first and finds the variable whose value is `"I exist in New York City!"`.

`centralPark()` (at __#3__) performs a similar search when logging `localString`, except that it finds `"I exist in Central Park!"` within its local scope. Having varying degrees of locality means we can declare variables by the same name in different scopes and utilize them as separate entities. The practice of declaring variables by the same name in different scopes is known as __shadowing__.

Run the `newYorkCity` / `centralPark` example in the console to practice scopes:

Practice using `call()` and `apply()` to specify an object to which `this` should be bound.

### The Scope Chain

In the event that `centralPark()` does not find a local variable named `localString`, it searches its parent scope, which, in this case, is the scope of `newYorkCity()`. If a `localString` variable still isn't found in the scope of `newYorkCity()`, then `centralPark()` would move its search again to the next immediate scope – in this case, the global scope.

The __scope chain__ dictates this lookup process: if a variable is not found in its parent scope, then the next outer scope is consulted, continuing until the search reaches the outermost (global) scope.

We learned about the concept of chains before when discussing prototypes. The lookup process of the scope chain is similar to the lookup process of the prototype chain:

1. Does `centralPark()` have a local variable named `localString`? _No, check the outer scope_
1. Does `newYorkCity()` have a local variable named `localString`? _Yes, stop looking, allow `centralPark()` to access this variable_

These steps outline the scope chain lookup process of the program below:

```js
var newYorkCity = function() {
  var localString = "I exist in New York City!";

  var centralPark = function() {
    console.log(localString);
  };

  centralPark();
};

newYorkCity(); // prints "I exist in New York City!"
```

The diagram below visually interprets the scopes of the above program, where each color represents a different scope.

![scope](https://bloc-global-assets.s3.amazonaws.com/images-frontend/screenshots/scopes-closures%20checkpoint/scope.png)

`centralPark()` can access its local scope, the scope of `newYorkCity()`, and the global scope. `newYorkCity()` can access its local scope and the global scope, but not the scope of `centralPark()`. The global scope does not have access to the scope of either `newYorkCity()` or `centralPark()`.

## Closures

As we nest functions, the scope chain grows. The innermost function of a scope chain has access to all the variables that exist both within and outside it. Any outer function, however, cannot access the scope of any inner function.

However, we can write code in a certain way that allows us to execute a function outside of its lexical scope.

![closure](https://bloc-global-assets.s3.amazonaws.com/images-frontend/closure.gif)

Rachel, from the hit 90s TV show _Friends_, is right! Thanks, Rachel.

Let's take a look at the previous example again:

```js
var newYorkCity = function() {
  var localString = "I exist in New York City!";

  var centralPark = function() {
    console.log(localString);
  };

  centralPark();
};

newYorkCity(); // prints "I exist in New York City!"
centralPark(); // ReferenceError: centralPark is not defined
```

In the example above, `centralPark()` cannot be called outside the scope of `newYorkCity()`. Each time we want to invoke `centralPark()`, we must first invoke `newYorkCity()`. However, we can use a __closure__ to access the `centralPark()` function and its original environment outside of `newYorkCity()`. Let's modify our program:

```js
var newYorkCity = function() {
  var localString = "I exist in New York City!";

  var centralPark = function() {
    console.log(localString);
  };

  // #4
  return centralPark;
};

// #5
var centralParkIsWhere = newYorkCity(); // closure!

centralParkIsWhere(); // prints "I exist in New York City!"
```

> Note: Recall that the `return` keyword makes any defined variable or value available outside the function after the function is called.

We've made two changes to our program:

- The `newYorkCity()` function now `return`s `centralPark` (at __#4__) instead of invoking it.
- We've assigned the function `newYorkCity()` to a new variable named `centralParkIsWhere` (at __#5__).

In this example, the variable `centralParkIsWhere` is a closure. We assign the invocation of `newYorkCity()` to `centralParkIsWhere`. Since `newYorkCity()` returns the actual function `centralPark`, we are effectively assigning the `centralPark()` function to a variable that exists outside of `newYorkCity()`.

When we invoke `centralParkIsWhere()`, we call `centralPark()` without having to execute `newYorkCity()` as well.

Let's look at another example of a closure:

```js
var outerFunction = function() {
  var hidden = "Shhh... I'm trying to hide from global";

  var innerFunction = function() {
    console.log(hidden);
  };

  return innerFunction;
};

// #6
var revealFunction = outerFunction(); // closure!

revealFunction(); // prints "Shhh... I'm trying to hide from global"
```

At __#6__, we create a new variable named `revealFunction` which is assigned the value of `outerFunction()`. When we invoke `revealFunction()`, we invoke `innerFunction()`, which has access to the inner scope of `outerFunction()`.

We create a closure any time an outer function returns a reference to an inner function. When we invoke that inner function (closure) from outside its original context, it still has access to its original lexical scope.

Go back through the Closures section and run the examples in the console.

## Immediately Invoked Function Expression (IIFE)

Recall that a "function expression" is an anonymous function assigned to a variable:

```js
var sayHello = function() {
  console.log("Hello!");
};
```

And a "function declaration" is a function defined, with or without a name, using the `function` keyword:

```js
function sayHello() {
  console.log("Hello!");
}
```

The difference between a function definition and a function expression is whether or not "function" is the first part of the statement. If it is, then the statement is a function declaration. If anything precedes "function," then it's a function expression.

The examples provided above are equivalent. To invoke the `sayHello()` function, regardless of what way the function was originally defined, we would write:

```js
sayHello();
```

Consider the following code:

```js
function sayHello() {
  console.log("Hello!");
}

sayHello(); // prints "Hello!"
```

We write a function named `sayHello` and immediately after declaration we invoke the function. JavaScript provides another way to do this, known as __immediately invoked function expressions__ or IIFE:

```js
(function sayHello() {
  console.log("Hello!");
})(); // prints "Hello!"
```

By starting the statement with a `(`, the function definition becomes a function expression. At the end of the expression we see a closing `)` as well as a set of `()`. Think of this final set of `()` as equivalent to the set of `()` we see here:

```js
sayHello();
```

The `()` invokes the function, and thus, the function is immediately called after definition.

Consider this IIFE that gets the date and time on page load.

Click the "Run with JS" button to simulate reloading the page. Notice that the time updates immediately on the page load because the function is invoked immediately.

### Why use an IIFE?

An IIFE is useful when trying to reduce the number of variables used in a scope. As programs grow in size, so do the number of variables required to perform operations. Too many variables can, in a sense, "clutter" the various scopes of a program.

In the following example, we establish the variable name `sayHello` within the global scope:

```js
function sayHello() {
  console.log("Hello!");
}

sayHello(); // prints "Hello!"
```

Our IIFE equivalent, however, hides the `sayHello` variable from the global scope. This means that the `sayHello()` function does not exist within the global scope:

```js
(function sayHello() {
  console.log("Hello!");
})(); // prints "Hello!"

sayHello(); // ReferenceError: sayHello is not defined
```

We can _hide_ code from outer scopes by wrapping that code in a function. We can also use closures to make _hidden_ code available to outer scopes if and when we choose. The combination of these abilities allow us to better organize and modularize programs. By _hiding_ the code in this way, variables defined in the scope of a program won't overwrite the variables defined in a library. Additionally, libraries use closures to make the library code accessible to programs.

## Recap

| **Concept** | **Description** |
| ----------- | --------------- |
| [Scope](http://www.w3schools.com/js/js_scope.asp) | Scope determines which variables a function can access. |
| Global Scope | Variables declared in the global scope, outside of any functions, are properties of the global object to which all functions in the program have access. |
| Local Scope | Variables declared inside of functions (local scope) are local variables to which access is limited. |
| [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures) | Closures are functions that reference a free variable. They are a way of accessing variables in a function after the function has finished executing. |
| [IIFE](http://en.wikipedia.org/wiki/Immediately-invoked_function_expression) | An immediately-invoked function expression is a function that executes as soon as it is defined. |
