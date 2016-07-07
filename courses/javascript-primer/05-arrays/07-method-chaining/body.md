<!--{ ids:[], language:'JavaScript', type:'workshop', order: 20, name:'Logical Operators', description:'List the logical operators and explain what they do.' }-->

### Objectives

After this exercise, you should be able to:



### Example

Method Chaining

Method chaining is a technique that simplifies calling multiple functions on the same object consecutively (remember that arrays are objects). For method chaining to work, the first method called must return an object that the next invoked method can use.

Let's start with our simple fruits array:

var fruits = ["banana", "apple", "orange"];
The following methods, performed in this order:

fruits.sort();
fruits.push("kiwi");
fruits; // returns ["apple", "banana", "orange", "kiwi"]
is the same as:

fruits.sort().push("kiwi");
fruits; // returns ["apple", "banana", "orange", "kiwi"]
We call two methods on the fruits array in the above example: sort() and push(), and we do it on the same line. This is possible because the sort() method returns the array after it has been sorted (in this case, in alphabetical order). We can then call the push() method on the sorted array and add a new item to the array.

The order of the methods matter and certain methods cannot precede other methods in a chain. For example, if we were to reverse the methods above and call fruits.push("kiwi").sort();, we might expect ["apple", "banana", "kiwi", "orange"] to be logged to the console, but that is not the case. Instead, we would receive a type error. The push() method does not return the array with the new item pushed to it – it returns the length of the new array, which is a number. By calling the push() method before the sort() method, we are telling the script to sort a number, not an array.

Research other array methods and determine at least one other pair of methods that you can chain together:

### Exercise
