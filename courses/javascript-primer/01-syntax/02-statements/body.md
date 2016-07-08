<!--{ ids:[106], language:'JavaScript', type:'workshop', order: 1, name:'Statements', description:'Statements are instructions' }-->

### Objectives

After this exercise, you should be able to:

- Recognize a statement
- Explain what a statement is

### Example

A JavaScript script is a set of instructions that a JavaScript interpreter follows one-by-one. Each individual instruction is known as a __statement__. Statements should end with a semicolon (`;`).

For example, this statement tells the interpreter to assign the value `5` to the variable name `numberOfOceans`:

```js
var numberOfOceans = 5;
```

To make code easier to read, each statement starts on a new line. A single statement may span multiple lines.

The following script has six statements (each line that ends with a semicolon):

```js
var today = new Date();
var year = today.getFullYear();
var message;

if (year % 4 === 0) {
  message = "It's a leap year!";
} else {
  message = "It's not a leap year.";
}
console.log(message);
```

We'll discuss what these statements do in the next exercise; for now, acquaint yourself with the structure of this code and try to identify patterns and similarities between lines.

### Exercise

Look at the code below. How many statements are there?

```js
var aliens = prompt("Aliens exist – true or false?");
var greeting;

if (aliens === false) {
  greeting = "Hello World!";
} else {
  greeting = "Hello Universe!";
}
console.log(message);
```

Answer by assigning `numberOfStatements` a value that is the number of statements you find.
