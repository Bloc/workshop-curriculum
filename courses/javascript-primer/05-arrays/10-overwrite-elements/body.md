<!--{ ids:[], language:'JavaScript', type:'workshop', order: 20, name:'Logical Operators', description:'List the logical operators and explain what they do.' }-->

### Objectives

After this exercise, you should be able to:



### Example

Overwrite Array Elements

To overwrite an array element, use the same notation used for accessing a value along with a = to assign the new value:

var fruits = ["apple", "banana", "orange"];

fruits[1] = "apple"; // assign "apple" to index 1 of the array
fruits;              // returns ["apple", "apple", "orange"]

var lastElementIndex = fruits.length - 1;
fruits[lastElementIndex] = "apple"; // assign "apple" to the last index of the array
fruits;                             // prints ["apple", "apple", "apple"]
Practice accessing array elements as well as overwriting them with new values:

### Exercise
