<!-- { ids:[1374], name:'JavaScript: Loops', summary:'Loops: write more efficient programs' } -->

![perfect loop sunglasses](https://bloc-global-assets.s3.amazonaws.com/images-frontend/gifs/Loops/sunglasses_perfect_loop.gif)
> A perfect loop of taking off sunglasses, from [the Perfect Loops subreddit](http://www.reddit.com/r/perfectloops/).

A __loop__ is a programming construct that executes code a certain number of times, usually by iterating on a collection of values or objects. The code continues to execute (or _loops_) as long as its condition evaluates to `true`.

In JavaScript, there are four types of loops: `for`, `for...in`, `while`, and `do...while`. We'll explore examples of each loop and consider when each type is best used.

## The `for` Loop

When we know the exact number of times a block of code must execute, we use a `for` loop. For that reason, iteration in `for` loops is usually controlled by a variable that tracks the number of executions.

Consider the `for` loop below:

```js
for (var i = 0; i < 10; i++) {
  // loop body
}
```

The first line of the loop, called the __loop header__, sets the conditions for which the loop will run. The __loop body__ is the statement that executes every time the program loops through its conditions. There are three JavaScript expressions contained in the loop header:

| Order | Expression         | Example      | Description |
| ----- | ------------------ | ------------ | ----------- |
| 1.    | _initialization_   | `var i = 0;` | Typically used to initialize a counter variable, such as `i`, whose value changes after each execution based on the _final-expression_. |
| 2.    | _condition_        | `i < 10;`    | Evaluated before each loop iteration. If this expression evaluates to true, the loop body is executed. This conditional test is optional. If omitted, the condition always evaluates to true.
| 3.    | _final-expression_ | `i++`        | Evaluated at the end of each loop iteration. Generally used to update or increment the counter variable. |

> Note that a semicolon is not required after the last expression.

We can add a simple `console.log()` statement to the loop body that prints out some text and the current index of the loop:

```js
for (var i = 0; i < 10; i++) {
  console.log("We're on index number " + i);
}
```

The output of this loop should look like this:

![printing the for loop](https://bloc-global-assets.s3.amazonaws.com/images-frontend/screenshots/Loops/js_loops_for_loop_output.png)

### `for` Loops and Arrays

`for` loops are often used to perform an action on each item in an array. The counter variable (`i`) in a `for` loop is useful for accessing an item at a given index.

Here's a loop that greets a group of friends:

```js
var friends = ["Troy", "Abed", "Annie"];

for (var i = 0; i < friends.length; i++) {
  console.log("Hi, " + friends[i] + "!");
}
```

Using the `length` property is a common pattern that ensures the loop stops once `i` is equal to the length of the array.

Recreate this loop in the console.

The output is:

```
"Hi, Troy!"
"Hi, Abed!"
"Hi, Annie!"
undefined
```

Recall that while `console.log()` prints data to the console, it also returns `undefined`.

### The `break` Keyword

There are two keywords that perform special operations in JavaScript loops: `break` and `continue`.

Similar to using `break` in a `switch` statement, using `break` in a loop discontinues the loop, usually in response to a certain condition. For example, if we run into Abed, instead of greeting him, we'd rather just walk away because he's weird (and we don't want to watch Six Candles again). To accomplish this, we could break the loop when it arrives at his name:

```js
var friends = ["Troy", "Abed", "Annie"];

for (var i = 0; i < friends.length; i++) {
  if (friends[i] === "Abed") {
    break;
  } else {
    console.log("Hi, " + friends[i] + "!");
  }
}
```

The output of this loop is:

```
"Hi, Troy!"
undefined
```

### The `continue` Keyword

`continue` _skips_ a code block, also usually in response to a certain boolean condition. Instead of walking away when we see Abed, we can use `continue` to skip over greeting Abed and continue with greeting Annie:

```js
var friends = ["Troy", "Abed", "Annie"];

for (var i = 0; i < friends.length; i++) {
  if (friends[i] === "Abed") {
    continue;
  } else {
    console.log("Hi, " + friends[i] + "!");
  }
}
```

The output of this loop is:

```
"Hi, Troy!"
"Hi, Annie!"
undefined
```

We can use the `break` and `continue` keywords in all types of JavaScript loops.

Practice using `break` and `continue` in `for` loops.

## The `for...in` loop

The `for...in` loop iterates through all enumerable properties in an object or array. This means that there is no need to set a series of conditions that tell the loop when to stop and how to progress. When the loop reaches the end of the enumerable properties, it exits.

> For the purposes of understanding loops, "enumerable properties" refers to any properties you've assigned to an object or any elements you've added to an array. For example, we know that we can access the `length` property of an array because it's built into JavaScript; because of this, the `length` property is _not_ enumerable and a `for...in` loop will not iterate over it.

We use the `for…in` loop to iterate over the properties of an object. [It is possible to use it with arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in#Array_iteration_and_for...in), but the loop does not guarantee a particular order. Therefore, use `for…in` exclusively with objects and `for` with arrays.

The following code loops through an object's properties and prints out the property and value in a descriptive string. Run it in JS Bin:

```js
var theObject = { color: "red", size: 10, shape: "square" };

for (var property in theObject) {
  console.log("The " + property + " of the object is " + theObject[property]);
}
```

The output of this loop is:

```
"The color of the object is red"
"The size of the object is 10"
"The shape of the object is square"
undefined
```

Like the `for` loop's counter variable, `for...in` requires that you declare a variable (`var property`) to hold the properties referenced in each stage of the loop. The object (`theObject`) that contains the properties through which the loop will iterate must follow the `in`.

Create an object and practice using the `for...in` loop to iterate over the object's properties.

## The `while` Loop

The `while` loop is most commonly used when it is unclear how many times a loop must run. Like a `for` loop, a `while` loop runs until a certain condition is no longer true. This means that all `for` loops can be re-written as `while` loops. Here's our first `for` loop translated to a while loop:

```js
var i = 0;

while (i < 10) {
  console.log("We're on index number " + i);
  i++;
}
```

The condition that will end the loop when it evaluates to `false` is in parentheses to the right of the `while` keyword. Variable creation and assignment must be done before the `while` loop is declared. Changes to the counter variable (`i`) must be made within the body of the loop.

Although we can rewrite any `for` loop as a `while` loop, a `while` loop does not require a counter variable. For example:

```js
while (true === true) {
  console.log("Beware... I'm an infinite loop.");
}
```

We can check any condition and execute any statement. The above example, however, creates an infinite loop. If you create an infinite loop, you'll likely need to quit the program by force (i.e. close the browser).

Practice creating `while` loops.

## The `do...while` Loop

The `do...while` loop is an antiquated looping pattern that executes code in a similar way to the `while` loop. Code is executed in a `do` block, and conditions for execution are set after the loop. Here's how we'd rewrite the previous `while` loop using the `do...while` syntax:

```js
var i = 0;

do {
  console.log("We're on index number " + i);
  i++;
} while (i < 10);
```

The only major difference between the `while` and the `do...while` is the time at which the conditions for exiting the loop are checked. `while` loops check if the condition is true _before_ the loop body runs, and the `do...while` loop waits until _after_ the loop body runs. This means that a `do…while` code block will always execute _at least once_.
