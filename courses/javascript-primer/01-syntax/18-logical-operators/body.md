<!--{ ids:[], language:'JavaScript', type:'workshop', order: 18, name:'Logical Operators', description:'List the logical operators and explain what they do.' }-->

### Objectives

After this exercise, you should be able to:

- List the logical operators
- Explain what each logical operator does
- Identify logical operations that evaluate to `true` and `false`

### Example

While comparison operators generally return a single value of `true` or `false`, __logical operators__, test the relationship between two boolean values or expressions that result in boolean values. There are three logical operators:

| Operator                                | Description                                   |
| :-------------------------------------: | --------------------------------------------- |
| `&&`<br>logical and                     | Tests more than one value or expression       |
| <code>&#124;&#124;</code><br>logical or | Tests at least one value or expression        |
| `!`<br>logical not                      | Takes a single value and returns the opposite |

```
true && true   // evaluates to true because both value are true
false && true  // evaluates to false because both values are not true
true || false  // evaluates to true because at least one value is true
false || false // evaluates to false because both values are false
!true          // evaluates to false
!false         // evaluates to true
!(5 == 5)      // evaluates to false
```

You can combine logical operators with comparison expressions to determine the truthiness of multiple expressions at once:

```
(4 > 3) && (9 == '9')    // evaluates to true because both comparisons evaluate to true
(10 > 7) || (5 === '5')  // evaluates to false because at least one expression is false
```

They can also be chained together with more than two expressions:

```
true && !false && true // evaluates to true because all three values are true
```

### Exercise

There are six variables declared in the editor. Determine which variables are assigned expressions that evaluate to `false` and remove their lines from the editor.
