<!--{ ids:[], language:'JavaScript', type:'workshop', order: 20, name:'Logical Operators', description:'List the logical operators and explain what they do.' }-->

### Objectives

After this exercise, you should be able to:



### Example

Access Elements

We can use dot or bracket notation to access object properties. Because valid variables names cannot begin with a number, we use bracket notation instead of dot notation to access array elements.

It's important to note, however, that an array, like any JavaScript object, can have named properties. We saw an example of this earlier, with the length property. The difference is that these named properties are built into JavaScript.
In the example diagram at the start of this checkpoint, the index of each element is displayed below its corresponding position in the array. Because arrays in JavaScript use zero-based numbering, the indices for the fruits array range from 0 to 2 rather than 1 to 3. To get the first element in the fruits array, we need to access index 0:

var fruits = ["apple", "banana", "orange"];

fruits[0]; // returns "apple"
fruits[1]; // returns "banana"
fruits[2]; // returns "orange"
fruits[3]; /* returns `undefined` because this index attempts
              to access a fourth element which doesn't exist */
Getting the last element index is a common operation to retrieve the value of the last element. To get the last element index, get the length of the array and subtract 1:

var lastElementIndex = fruits.length - 1;
With bracket notation, the variable lastElementIndex evaluates to 2:

fruits[lastElementIndex]; // returns "orange"

### Exercise
