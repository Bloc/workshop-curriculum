<!--{ ids:[138], language:'JavaScript', type:'workshop', order: 12, name:'Arithmetic Operators I', description:'Use standard arithmetic operators to perform math operations.' }-->

### Objectives

After this exercise, you should be able to:

- List the standard arithmetic operators
- Explain what the standard arithmetic operators do
- Demonstrate how to use the standard arithmetic operators

### Example

Arithmetic expressions generally use __arithmetic operators__ to return a value. An arithmetic operator takes numerical values as its operands and returns a single numerical value.

The standard arithmetic operators are:

| Operator              | Example  | Evaluates to... |
| :-------------------: | -------- | --------------- |
| addition<br>`+`       | `5 + 6`  | `11`            |
| subtraction<br>`-`    | `11 - 6` | `5`             |
| multiplication<br>`*` | `13 * 3` | `39`            |
| division<br>`/`       | `42 / 7` | `6`             |

We can use operators to manipulate a single variable:

```js
var num = 0;    // num evaluates to 0
num = num + 3;  // num evaluates to 3
num = num - 1;  // num evaluates to 2
num = num * 15; // num evaluates to 30
num = num / 3;  // num evaluates to 10
```

Or multiple variables:

```js
var width = 3;
var height = 4;
var area = width * height; // evaluates to 12
```
