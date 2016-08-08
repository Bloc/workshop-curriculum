<!--{ ids:[185], language:'JavaScript', type:'workshop', order: 4, name:'Remove Elements', description:'Remove elements from an array' } -->
### Objectives

After this exercise, you should be able to:

- Demonstrate how to remove elements from an array

### Example

Two methods used frequently for removing array elements are:

- `pop() method` – remove an element from the end of an array, return that element
- `shift() method` – remove an element from the start of the array, return that element

```js
var numbers = [1, 2, 3, 4, 5];
```

We've created an array named `numbers` with five elements. We'll use the `pop()` method to remove and return the last element in the array:

```js
var lastElement = numbers.pop();
numbers;      // returns [1, 2, 3, 4]
lastElement;  // returns 5
```

Next, we'll use the `shift()` method to remove and return the first element in the array:

```js
var firstElement = numbers.shift();
numbers;      // returns [2, 3, 4]
firstElement; // returns prints 1
```
