### Exercise

Write a function called `objectToArray`. This function should:

  - take one argument, an object
  - use the object's properties and values to create strings that are pushed to an array
  - each string should be in the format of "[key] is [value]" for each key-value pair in the object
  - if an empty object is passed in, an empty array should be returned

For example:

```js
objectToArray({});                         // returns []
objectToArray({name: "Marcia", age: 101}); // returns ["name is Marcia", "age is 101"]
```
