<!--{ ids:[], language:'JavaScript', type:'workshop', order: 20, name:'Logical Operators', description:'List the logical operators and explain what they do.' }-->

### Objectives

After this exercise, you should be able to:



### Example

for Loops and Arrays

for loops are often used to perform an action on each item in an array. The counter variable (i) in a for loop is useful for accessing an item at a given index.

Here's a loop that greets a group of friends:

var friends = ["Troy", "Abed", "Annie"];

for (var i = 0; i < friends.length; i++) {
  console.log("Hi, " + friends[i] + "!");
}
Using the length property is a common pattern that ensures the loop stops once i is equal to the length of the array.

Recreate this loop in the console:


The output is:

"Hi, Troy!"
"Hi, Abed!"
"Hi, Annie!"
undefined
Recall that while console.log() prints data to the console, it also returns undefined.

### Exercise
