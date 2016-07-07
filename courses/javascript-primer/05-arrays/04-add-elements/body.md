<!--{ ids:[], language:'JavaScript', type:'workshop', order: 20, name:'Logical Operators', description:'List the logical operators and explain what they do.' }-->

### Objectives

After this exercise, you should be able to:



### Example

Add to an Array

Adding to an array is different from adding to an object because array elements are ordered. To build and add to an array when a script is executing, the most common methods are:

push() method – add an element to the end of an array, returns the new length of the array
unshift() method – add an element to the start of an array, returns the new length of the array
var myArray = [];

myArray.push("firstElement");  // add an element to the end of the array
myArray;                       // returns ["firstElement"]

myArray.push("secondElement"); // add an element to the end of the array
myArray;                       // returns ["firstElement", "secondElement"]

myArray.unshift(3);            // add an element to the start of the array
myArray;                       // returns [3, "firstElement", "secondElement"]

myArray.push(4);               // add an element to the end of the array
myArray;                       // returns [3, "firstElement", "secondElement", 4]
Practice the push() and unshift() array methods:

### Exercise
