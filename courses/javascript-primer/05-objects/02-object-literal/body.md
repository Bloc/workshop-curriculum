<!--{ ids:[175], language:'JavaScript', type:'workshop', order: 1, name:'Object Literal', description:'The simplest way to create an object' } -->

### Objectives

After this exercise, you should be able to:

- Recognize an object
- Demonstrate how to create an object literal

### Example

One way to create an object is to assign a set of curly braces (`{}`) to a variable. This is known as an __object literal__. To create an object named `orange`, we would write:

```js
var orange = {};
```

Because the curly braces are empty, we've created an object with no properties.

You can, however, assign properties to an object when you create it. For example:

```js
var orange = {
  color: "orange",
  shape: "round"
};
```

We've added `color` and `shape` properties to the `orange` object. The pairs of property names and associated values are structured with the property name to the left, followed by a colon, followed by the assigned value. The pairs are separated by a comma, where the last pair does not end with a comma:

| Property | Colon | Value    | Comma  |
| -------- | ----- | -------- | ------ |
| color	   | :     | "orange" | ,      |
| shape    | :     | "round"  | &nbsp; |

Property names are converted to strings by the JavaScript compiler. In general, a well-formatted property name follows the same rules and style guide for writing a good variable name.
