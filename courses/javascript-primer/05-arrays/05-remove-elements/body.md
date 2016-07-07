<!--{ ids:[], language:'JavaScript', type:'workshop', order: 20, name:'Logical Operators', description:'List the logical operators and explain what they do.' }-->

### Objectives

After this exercise, you should be able to:



### Example

Remove from an Array

Two methods used frequently for removing array elements are:

pop() method – remove an element from the end of an array, return that element
shift() method – remove an element from the start of the array, return that element
These methods are the inverse of push() and unshift().

For example, let's create an array named numbers:

var numbers = [1, 2, 3, 4, 5];
Let's use the pop() method to remove and return the last element in the array:

var lastElement = numbers.pop();
numbers;      // last element removed, prints [1, 2, 3, 4]
lastElement;  // last element returned, prints 5
Next, let's use the shift() method to remove and return the first element in the array:

var firstElement = numbers.shift();
numbers;      // first element removed, prints [2, 3, 4]
firstElement; // first element returned, prints 1
Practice the pop() and shift() array methods:

### Exercise
