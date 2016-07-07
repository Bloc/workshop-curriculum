__Variables__ store data in JavaScript. They're a way for a JavaScript program to remember information that will be used later. To declare a variable in JavaScript, use the `var` keyword:

```js
var myFirstVariable;
```

Think of a variable like a box that stores something that will be useful to the program later. What a variable stores is known as a __value__, and we __assign__ a value to a variable. Assigning a value to a variable can be done at the time the variable is declared:

```js
var myFirstVariable = 5;
```

or after:

```js
var myFirstVariable;
myFirstVariable = 5;
```

> The `var` keyword is only required before the initial declaration of the variable.

In the above examples, we've stored `5` in the `myFirstVariable` box. Or, more accurately, we've assigned the value `5` to the `myFirstVariable` variable.

We can view the contents of `myFirstVariable` by writing it to the console, or by printing it using the `console.log()` function.

```js
myFirstVariable;
console.log(myFirstVariable);
```

The above two lines are each a JavaScript __statement__. Statements are like a sentence of JavaScript code. They begin and end a specific, compartmentalized action in a program. All statements in JavaScript are followed by a semicolon, which prevents JavaScript from treating consecutive statements as one.

It's possible to declare multiple variables at once:

```js
var myFirstVariable, mySecondVariable, myThirdVariable;
```

and to assign multiple values with a single `var` declaration:

```js
var one = 1,
    two = 2,
    three = "three";

// Print all three variables with console log
console.log(one + " " + two + " " + three); // output is "1 2 three"
```

Here is a video recap on JavaScript variables:

<center><iframe src="//fast.wistia.net/embed/iframe/vqa5cwpfif" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="100%" height="300"></iframe></center><script src="//fast.wistia.net/assets/external/E-v1.js" async></script>

Practice creating variables, assigning values, and printing to the console.
## Comments

__Comments__ allow you to annotate parts of a program. Any text in a comment will not be treated as part of executable code. Use the double forward slash `//` for a single line comment and a forward slash with asterisks for a multi-line comment (like `/* Comment */`):

```js
// Here's a single line comment

/* Here's a
   multi-line
   comment */
```

We'll use comments regularly throughout the course to denote special information to you. We've introduced them here so that you understand their purpose when we use them. Eventually you'll use comments in your JavaScript files, but you'll learn more about best practices for commenting later in the Foundation.

You don't need to use comments when you practice JavaScript in the console.

## Update Variables with New Values

It's possible to update a variable's value using the same assignment syntax.

```js
var myVariable = 5;
console.log(myVariable); // outputs 5

myVariable = 6;
console.log(myVariable); // outputs 6
```

Order of assignment matters; if multiple assignments to the same variable occur, the last assigned value will be held until the variable is emptied or reset. The above example illustrates this dynamic: the output of the last `console.log()` call reflects the most recent value assigned to `myVariable`.

Create a variable and practice updating the value assigned to that variable.

## Keywords and Reserved Words

We mentioned earlier that `var` is a JavaScript keyword. A keyword in JavaScript is a word that can't be used in variable or function names because it has a special purpose. We'll learn more common keywords in the upcoming checkpoints. __Reserved words__ are words that JavaScript has saved as potential keywords for future versions of the language. Here's a complete list of JavaScript's keywords and reserved words:

```js
break case catch class const continue debugger
default delete do else enum export extends false
finally for function if implements import in
instanceof interface let new null package private
protected public return static super switch this
throw true try typeof var void while with yield
```

## Recap

| **Concept** | **Description** |
| ----------- | --------------- |
| [JavaScript](http://en.wikipedia.org/wiki/JavaScript) | JavaScript is the only client-side scripting language that runs in all major web browsers. |
| [ECMAScript](http://en.wikipedia.org/wiki/ECMAScript) | JavaScript is an implementation of the ECMAScript standard. |
| [Variables](http://www.w3schools.com/js/js_variables.asp) | Variables store data in JavaScript. They're a way for a JavaScript program to remember information that will be used later. Variables must be identified with unique names. |
| [Statements](http://www.w3schools.com/js/js_statements.asp) | Statements are like a sentence of JavaScript code. They begin and end a specific, compartmentalized action in a program. All statements in JavaScript are followed by a semicolon. |
| [Keywords and Reserved Words](http://www.w3schools.com/js/js_reserved.asp) | A keyword is a word that can't be used in variable or function names because it has a special purpose. Reserved words are saved as potential keywords for future versions of the language. |
