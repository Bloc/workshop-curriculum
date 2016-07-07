<!--{ ids:[], language:'JavaScript', type:'workshop', order: 20, name:'Logical Operators', description:'List the logical operators and explain what they do.' }-->

### Objectives

After this exercise, you should be able to:



### Example

One way to create an object is to assign an empty set of curly braces (`{}`) to a variable. To create an object named `orange`, we would write:

```js
var orange = {};
```

An object created via curly braces is an object literal. Additionally, because the curly braces are empty, we've created an object with no properties.

You can also assign properties to an object when you create it. For example:

```js
var orange = {
  color: "orange",
  shape: "round"
};
```

We've added `color` and `shape` properties to the `orange` object. The pairs of property names and associated values are structured with the property name to the left, followed by a colon, followed by the value. The pairs are separated by a comma, where the last pair does not end with a comma:

| Property | Colon | Value    | Comma  |
| -------- | ----- | -------- | ------ |
| color	   | :     | "orange" | ,      |
| shape    | :     | "round"  | &nbsp; |

Property names are converted to strings by the JavaScript compiler. In general, write property names the same as you would other identifiers, like variable names.

### Exercise
