<!--{ ids:[141], language:'JavaScript', type:'workshop', order: 15, name:'Type Coercion', description:'Coerce one data type into a another... everyone's doing it!' }-->

### Objectives

After this exercise, you should be able to:

- Explain what type coercion is
- Explain what each comparison operator does
- Demonstrate how to use the comparison operators

### Example

Here's the list of comparison operators again for reference:

| Operator                      | Returns `true` if the...                                                 | Examples that return `true` |
| :---------------------------: | ------------------------------------------------------------------------ | --------------------------- |
| `==`<br>equal                 | values are equal                                                         | `'2' == 2`                  |
| `===`<br>strict equal         | values are equal and of the same type                                    | `2 === 2`                   |
| `!=`<br>not equal             | values are not equal                                                     | `"Howdy" != "Hello"`        |
| `!==`<br>strict not equal     | values are of the same data type but not equal, or are of different type | `"Howdy" !== "howdy"`       |
| `>`<br>greater than           | left value is greater than the right value                               | `4 > 3`                     |
| `>=`<br>greater than or equal | left value is greater than or equal to the right value                   | `4 >= 4`                    |
| `<`<br>less than              | left value is less than the right value                                  | `"Hi" < "Hello"`            |
| `<=`<br>less than or equal    | left value is less than or equal to the right value                      | `4 <= 5`                    |

Usually, when two values are not of the same data type, JavaScript tries to convert them to the same type for the comparison. This is known as __type coercion__, or type conversion, and most often results in comparing the values numerically.

For example, `'2'` is a string data type while `2` is a number data type. The comparison `'2' == 2`, however, returns `true` because JavaScript coerces the string `'2'` into the number `2` for the comparison.

Type coercion can often cause unexpected results or errors in code. To avoid type coercion, use the strict equal and strict not equal operators (`===` and `!==`, respectively). These operators do not try to convert compared values to the same type before checking equality. For example, while `'2' == 2` returns `true`, `'2' === 2` returns false.

### Exercise

There are six variables declared in the editor. Determine which variables are assigned expressions that evaluate to `false` and remove their assignments.

```
var comparison7 = 42 + 4;
```

For example, if you think the expression assigned to `comparison7` evaluates to `false`, then remove its assigned value and leave it like so:

```
var comparison7;
```
