<!--{ ids:[182], language:'JavaScript', type:'workshop', order: 1, name:'Create an Array', description:'Create an array' }-->

### Objectives

After this exercise, you should be able to:

- Recognize an array
- Create an array

### Example

![an array that has three strings](https://bloc-global-assets.s3.amazonaws.com/screencaps/array.png)

Let's turn our list of fruits into an array.

To create an array, assign an empty set of brackets (`[]`) to a variable:

```js
var fruits = [];
```

This array contains no values.

We can also create arrays with elements (values) assigned to them. Elements in an array are separated by commas. For example, we could translate the diagram above to the following JavaScript array:

```js
var fruits = ["apple", "banana", "orange"];
```

An array is actually a type of JavaScript object and is not a data type itself. In other words, the data type of an array is "object", not "array".

You can test this by using the `typeof` operator, which returns a string indicating the data type of the specified expression:

```js
typeof fruits; // returns "object"
```

### Exercise

Create a function named `createArray`. This function should:

  - take four arguments
  - return an array with those arguments as elements

For example:

```js
createArray(1,2,3,4); // returns [1,2,3,4]
```
