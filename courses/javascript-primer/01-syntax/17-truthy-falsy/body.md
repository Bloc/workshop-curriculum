<!--{ ids:[142], language:'JavaScript', type:'workshop', order: 16, name:'Truthy and Falsy', description:'Truthy and falsy is like true and false, but less strict' } -->

### Objectives

After this exercise, you should be able to:

- Recognize truthy and falsy values
- Explain what truthy and falsy values are

### Example

Type coercion also occurs when values can be treated as `true` or `false` in a boolean context. Recall that in the expression `'2' == 2`, the string `'2'` is coerced into the number `2` for the comparison. Similarly, in the expression `true == 1`, the number `1` is coerced into a boolean value of `true`.

In JavaScript, a __truthy__ value is a value that can be treated as `true`. Here are some examples of truthy values:

| Value     | Description                                         |
| --------- | --------------------------------------------------- |
| `true`    | A regular boolean `true` value                      |
| `1`       | Any number other than zero                          |
| `42 / 21` | Calculations                                        |
| `"false"` | Strings with text, even `false` written as a string |

All values are truthy unless they are __falsy__, which is a value that can be treated as `false`. Here are some examples of falsy values:

| Value         | Description                                       |
| ------------- | ------------------------------------------------- |
| `false`       | A regular boolean `false` value                   |
| `0`           | The number zero                                   |
| `var life;`   | A variable with no assigned value, or `undefined` |
| `''` or `""`  | An empty string                                   |
| `42 / 'life'` | A string as a denominator is `NaN` (Not a Number) |
