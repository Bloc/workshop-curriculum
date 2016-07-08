<!--{ ids:[194], language:'JavaScript', type:'workshop', order: 4, name:'For...In Loops I', description:'Iterate through properties of an object' }-->

### Objectives

After this exercise, you should be able to:

- Recognize a `for...in` loop
- Explain what a `for...in` loop is used for
- Write a `for...in` loop

### Example

The __`for...in` loop__ iterates through properties of an object. This means that there is no need to set a series of conditions that tell the loop when to stop and how to progress. When the loop reaches the end of the properties, it exits.

We use the `for...in` loop to iterate over the properties of an object. It is possible to use it with arrays, but the loop does not guarantee a particular order. Therefore, use `for...in` loops exclusively with objects and `for` loops with arrays.

The following code loops through an object's properties and prints out the property and value in a descriptive string:

```js
var theObject = { color: "red", size: 10, shape: "square" };

for (var key in theObject) {
  console.log("The " + key + " of the object is " + theObject[key]);
}
```

The output of this loop is:

```
"The color of the object is red"
"The size of the object is 10"
"The shape of the object is square"
undefined
```

Like the `for` loop's counter variable, `for...in` requires that you declare a variable (`var key`) to hold the properties referenced in each stage of the loop. This variable is followed by the `in` keyword, which is followed by the name of object that the loop will iterate through.

### Exercise

Write a function called `getKeys`. This function should:

  - accept one argument, an object
  - return an array of each of the keys in the object

For example:

```js
var obj = {name: "Marcia", age: 101};
getKeys(obj); // returns ["name", "age"]
```

Write a function called `getValues`. This function should:

  - accept one argument, an object
  - return an array of each of the values in the object

For example:

```js
var obj = {name: "Marcia", age: 101};
getValues(obj); // returns ["Marcia", 101]
```
