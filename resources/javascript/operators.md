JavaScript's most basic units of data are referred to as __primitive types__ or sometimes __values__. There are five primitive types: numbers, strings, booleans, undefined, and null.

## Numbers

A number in JavaScript refers to an integer (a whole number, like 1, 5, 100, etc.) or a float (a number with a decimal, like 3.14, 2.718, 2.5, etc.). We can manipulate the value of a number using __operators__. An operator is a symbol or JavaScript keyword that acts on a value or set of values. Use the following operators to perform arithmetic on numbers:

```js
5 + 6  // evaluates to 11
42 / 7 // evaluates to 6
11 - 6 // evaluates to 5
13 * 3 // evaluates to 39
```

> As mentioned in the previous checkpoint, the `//` characters indicate an inline JavaScript comment. We'll use comments to indicate the result of __expressions__. A JavaScript expression refers to code that results in a value.

Using the minus sign before a number makes it negative:

```js
2 + -3 // evaluates to -1
5 - -2 // evaluates to 7
```

JavaScript's number operators are consistent with basic arithmetic operators with two exceptions: the asterisk (`*`) is used in the place of the × sign, and the forward slash (`/`) in place of the ÷ sign.

Practice different math operations in the console.

### The Modulo Operator

The modulo operator `%` divides the number on the left side by the number on the right side and returns the remainder. For example:

```js
15 % 2 // evaluates to 1 because 15 divided by 2 is 7, with a remainder of 1
20 % 7 // evaluates to 6 because 20 divided by 7 is 2, with a remainder of 6
```

> The modulo operator is often used to determine composite factors of a number. There are a few other common uses explored in this [StackOverflow question](http://stackoverflow.com/questions/2609315/recognizing-when-to-use-the-modulus-operator).

Practice using the modulo operator.

### Recap

Here's a table that reviews all of the numerical operators we just explored:

| Operator | Description |
| :------: | ----------- |
| `+`      | Use this operator to add two numbers. |
| `-`      | When used between two numbers, this subtracts the second number from the first. If it's used immediately before a single number, it changes that number from positive to negative. |
| `*`      | Use this operator to multiply two numbers. |
| `/`      | Use this operator to divide two numbers. |
| `%`      | Use this operator to divide the first number by the second and return the remainder. |

> JavaScript's mathematical operators prioritize evaluating expressions using traditional [order of operations](http://www.mathgoodies.com/lessons/vol7/order_operations.html).

## Strings

A JavaScript string is a block of text of any length. Strings are delimited by opening and closing quotation marks, either single (`''`) or double (`""`). There is no major difference between the two except in certain semantic situations. For example:

```js
"I'm taking the frontend web development course"
'I'm taking the frontend web development course'
```

These sentences attempt to use both types of quotation marks to form a string, but they are not equal. The second sentence will throw an error.

By using an apostrophe in `I'm`, we close the string too early. JavaScript will interpret `I` as a string and the rest as nonsense and throw an error. With any JavaScript interpreter, a series of errors will occur as a result of improper string formatting. A similar problem is caused when trying to quote text within a string:

```js
"I said, "I'm taking the frontend web development course""
```

Only `"I said, "` and the empty space between the final two quotation marks `""` will be interpreted a strings. An environment running JavaScript won't know what the fragment `I'm taking the frontend web development course` is intended to be and throw an error.

To solve this problem, JavaScript uses the __escape character__ (`\`) to signal that certain text must be treated as part of the string. Re-writing the sentences with escape characters looks like this:

```js
'I\'m taking the frontend web development course'
"I said, \"I'm taking the frontend web development course\""
```

These revised strings won't throw any errors because the escape characters tell JavaScript that the quotations are part of the string.

Practice creating strings and assigning them to variables.

### Escape Sequences

Because a backslash is a special character, we can't use `\` on its own if we need to print a backslash. Instead, we must type `\\`, which is an __escape sequence__ that outputs a single backslash.

Another common escape sequence is `\n`, which outputs a newline. It's equivalent to creating a newline using the Enter key in a text editor. For example, the following sentences

```js
"I just started the frontend web development course.\nSo far, I've learned about HTML, CSS, and some JavaScript."
```

will print as

```js
I just started the frontend web development course.
So far, I've learned about HTML, CSS and some JavaScript.
```

Here are a few common escape sequences:

| Escape Sequence | Output       |
| --------------- | ------------ |
| \'              | single quote |
| \"              | double quote |
| \\              | backslash    |
| \n              | newline      |
| \t              | tab          |

Practice the different escape sequences.

### Concatenation

__String concatenation__ is the act of combining two or more strings. There are multiple methods for concatenating strings, but the most succinct method uses the plus sign operator to add them together.

```js
"How much wood could a woodchuck chuck" + ", if a woodchuck could chuck wood?"
// evaluates to "How much wood could a woodchuck chuck, if a woodchuck could chuck wood?"
```

The following video demonstrates the use of strings and the usefulness of concatenation:

<iframe src="//fast.wistia.net/embed/iframe/yhe01w2geo" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen width="100%" height="300"></iframe><script src="//fast.wistia.net/assets/external/E-v1.js" async></script>

Practice string concatenation using the plus sign.

### Recap

Here's a table that reviews the operators and symbols important for JavaScript strings.

| Operator or Symbol | Description |
| :----------------: | ----------- |
| `""` and `''`      | Single and double quotes are both used for denoting a JavaScript string. |
| `\`                | The backslash symbol is an __escape character__ which signifies that the symbol or letter following it has special meaning. |
| `+`                | The `+` operator is used to __concatenate__, or combine, two strings. |

## Booleans

A __boolean__ is a data type that expresses whether code is true or false. Booleans must be written with all lowercase lettering in order for JavaScript to interpret them properly. They're often used to determine whether code should be executed based on certain conditions.

### Comparators

JavaScript can determine whether an expression is true or false using __comparators__, which are operators used to compare two pieces of code. For example, to check if two numbers, strings, or booleans are equivalent, use the `==` operator.

```js
5 == 5 // evaluates to true
'frontend development' == 'frontend web development' // evaluates to false
true == true // evaluates to true
```

Another comparator for checking whether two values or expressions are equivalent is the __strict equality operator__, represented by three equal signs `===`. The double equal sign `==` attempts to convert the type of the value on the left side to the same type as the value on the right side and _then_ check if the comparison is true. The strict equality operator `===`, on the other hand, tests to make sure that the code on either side of it evaluates to both the same value _and_ type. For example, using `==` with a string of a number and a number, this expression evaluates to `true`:

```js
"5" == 5 // returns true
```

The operator first converts `"5"` from type string to type number to match the type found on the right side.

Using the strict equality operator `===` with the same expression evaluates to `false`:

```js
"5" === 5 // returns false
```

To check whether two values are _not_ equal, there are similar comparison operators, `!=` and `!==`. `!=`, like `==`, will attempt to convert the type of the left value to that of the right value before assessing whether the two values aren't equal. `!==` checks to see if both the type and value aren't equivalent.

```js
1 != "1"  // returns false because the operator considers values equal regardless of type
1 !== "1" // returns true because the operator knows the values don't share the same type
```

There are comparators for determining whether a value is greater than or less than another. This includes the greater than operator (`>`), the greater than or equal to operator (`>=`), the less than operator (`<`), and the less than or equal to operator (`<=`). Using these operators returns a boolean that evaluates the [truthiness](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) of each expression. For example:

```js
5 > 6  // returns false
5 >= 5 // returns true
2 < 10 // returns true
4 <= 3 // returns false
```

Practice using comparators (equal to, not equal to, greater than, less than, etc.).

### Logical Operators

Boolean operators, also known as __logical operators__, test the relationship between two boolean values or expressions that result in boolean values. There are three logical operators: the _and_, _or_, and _not_ operators.

An expression using the _logical and_ operator, represented by a double ampersand (`&&`), checks to see if _both_ values on either side of it are true:

```js
true && true  // returns true
false && true // returns false
```

An expression using the _logical or_ operator, represented by double vertical pipes (`||`), checks to see if _either_ value is true:

```js
true || false  // returns true because the value on the left is true
false || false // returns false because both values are false
```

The _not_ operator, represented by an exclamation point (`!`), is a __unary__ operator, meaning it acts only on a single value. It produces the opposite boolean value that it precedes:

```js
!true || false // returns false because !true evaluates to false
!false         // evaluates to true
```

Logical operators can be combined with comparison expressions to determine the truthiness of multiple expressions at once:

```js
5 === 5 && 'frontend' === 'frontend' // returns true because both comparisons evaluate to true
10 > 7 && '5' === 5                  /* returns false because the first expression is true but
                                        the string '5' does not strictly equal the number 5 */
```

They can also be chained together with more than two expressions:

```js
true && !false && true // returns true because all three values are true
!true || true || true // returns true because the two latter values are true
```

When multiple operators are strung together, the logic can become complex and difficult to discern. If you have difficulty understanding complex logic operators, consider making a truth table, like the one shown in [this video](https://www.youtube.com/watch?v=IwLExQbPlBU), to break down the complexity.

Practice using logical operators (`&&`, `||`, `!`).

### Recap

| Comparison Operator | Description                       |
| :-----------------: | --------------------------------- |
| `==`                | equal to                          |
| `===`               | equal value and equal type        |
| `!=`                | not equal                         |
| `!==`               | not equal value or not equal type |
| `>`                 | greater than                      |
| `<`                 | less than                         |
| `>=`                | greater than or equal to          |
| `<=`                | less than or equal to             |

| Logical Operator | Description |
| :--------------: | ----------- |
| `&&`             | and         |
| &#124;&#124;     | or          |
| `!`              | not         |

## Undefined and Null

Undefined and null are JavaScript values that represent the _absence_ of a usable value. They don't hold data like other primitives, and they are interchangeable for all practical purposes.

Functions, which we'll cover in the next checkpoint, return `undefined` if they do not explicitly return a specified value. Similarly, variables assigned no value default to `undefined`, e.g. `var myVar` instead of `var myVar = 5`.

## `typeof` Operator

The `typeof` operator returns a string of the type of value on which it is called. For example:

```js
typeof 5            // returns "number"
typeof "JavaScript" // returns "string"
typeof true         // returns "boolean"
typeof undefined    // returns "undefined"
```

### Limitations of `typeof`

The `typeof` operator specifies primitive types, with one exception. The value `null` will return `"object"`, [because of a bug in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null#Difference_between_null_and_undefined). In addition, it does not specify object types, returning `"object"` instead of the specific object type (which we will discuss in a later checkpoint).

## Recap

| **Concept** | **Description** |
| ----------- | --------------- |
| [Primitive Types](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) | Primitive data types, or values, are JavaScript's most basic units of data. |
| [Numbers](http://www.w3schools.com/js/js_numbers.asp) | JavaScript has only one type of number that can be manipulated with operators, a symbol or keyword that acts on a set of values. |
| [Strings](http://www.w3schools.com/js/js_strings.asp) | A JavaScript string is a block of text of any length and delimited by quotation marks. |
| [Booleans](http://www.w3schools.com/js/js_booleans.asp) | A boolean is a data type that expresses whether code is true or false. Booleans must be written with all lowercase lettering. |
| [Undefined](http://www.w3schools.com/jsref/jsref_undefined.asp) and [Null](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null) | Undefined and null are JavaScript values that represent the absence of a usable value. They don't hold data like other primitives. |
