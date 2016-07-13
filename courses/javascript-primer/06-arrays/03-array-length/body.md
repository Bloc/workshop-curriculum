<!--{ ids:[183], language:'JavaScript', type:'workshop', order: 2, name:'Array Length', description:'The number of elements in an array' }-->

### Objectives

After this exercise, you should be able to:

- Demonstrate how to get the length of an array

### Example

The number of elements in an array is information that scripts often rely on to perform various operations. Because it's common information, JavaScript has a built-in property that can be accessed on all arrays: the `length` property.

For example, to get the number of elements that are in the `fruits` array:

```js
var fruits = ["apple", "banana", "orange"];
fruits.length; // returns 3
```

### Exercise

Create a function named `arrayLengthPlusOne`. This function should:

  - take one argument, an array
  - return a number that is one greater than the number of elements in the array

For example:

```js
arrayLengthPlusOne([0,0,1,0,2,1]); // returns 7
arrayLengthPlusOne([42]);          // returns 2
```
