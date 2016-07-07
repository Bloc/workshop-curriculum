<!--{ ids:[], language:'JavaScript', type:'workshop', order: 8, name:'String Operator', description:'Recognize and use the string operator.' }-->

### Objectives

After this exercise, you should be able to:

- Recognize the string operator
- Explain what the string operator does
- Use the string operator to concatenate a string

### Example

The concatenation operator, or __string operator__, (`+`) concatenates two string values together and returns a single string that is the union of the two operand strings.

For example:

```
"Hello" + "World!"
```

becomes `HelloWorld!` – the string operator does not insert whitespace. We must add whitespace ourselves:

```
"Hello " + "World!"
"Hello" + " " + "World!"
```

Both lines above use concatenation in different ways to achieve the same output string: `"Hello World!"`. The first line adds a space to the end of the first string, while the second line concatenates three strings together (a single space between quotation marks is a valid string).

When we use concatenation to break up long strings, we can place the subsequent strings on new lines.

For example, instead of:

```
"I hear and I forget. I see and I remember. I do and I understand."
```

We can do this:

```
"I hear and I forget. " +
"I see and I remember. " +
"I do and I understand."
```

When working with long concatenated strings, tabbing the new lines to line up vertically is not required, but it is a stylistic preference that makes code easier to read:

```js
var confuciusQuote = "I hear and I forget. " +
                     "I see and I remember. " +
                     "I do and I understand.";
```

### Exercise

Divide the long string into five shorter ones and use the string operator to concatenate the strings together so the output is the same. Be mindful of whitespace.
