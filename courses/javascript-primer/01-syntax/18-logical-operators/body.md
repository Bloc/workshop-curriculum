<!--{ ids:[143], language:'JavaScript', type:'workshop', order: 17, name:'Logical Operators', description:'Test the relationship between two boolean values' }-->

### Objectives

After this exercise, you should be able to:

- List the logical operators
- Explain what each logical operator does
- Identify logical operations that evaluate to `true` and `false`

### Example

While comparison operators generally return a single value of `true` or `false`, __logical operators__ test the relationship between two boolean values or expressions that result in boolean values. There are three logical operators:

| Operator                                | Description                                   |
| :-------------------------------------: | --------------------------------------------- |
| `&&`<br>logical and                     | Tests more than one value or expression       |
| <code>&#124;&#124;</code><br>logical or | Tests at least one value or expression        |
| `!`<br>logical not                      | Takes a single value and returns the opposite |

Here are some examples of expressions that use logical operators:

| Example          | Evaluates to... | Because...                   |
| ---------------- | --------------- | ---------------------------- |
| `true && true`   | `true`          | both value are `true`        |
| `false && true`  | `false`         | both values are not `true`   |
| `true || false`  | `true`          | at least one value is `true` |
| `false || false` | `false`         | both values are `false`      |
| `!true`          | `false`         | it's the opposite of `true`  |
| `!false`         | `true`          | it's the opposite of `false` |

You can combine logical operators with comparison expressions to determine the truthiness of multiple expressions at once:

| Example                   | Evaluates to... | Because...                          |
| ------------------------- | --------------- | ----------------------------------- |
| `(4 > 3) && (9 == '9')`   | `true`          | both comparisons evaluate to `true` |
| `(10 > 7) || (5 === '5')` | `false`         | at least one expression is `false`  |

They can also be chained together with more than two expressions:

| Example                  | Evaluates to... | Because...                  |
| ------------------------ | --------------- | --------------------------- |
| `true && !false && true` | `true`          | all three values are `true` |
