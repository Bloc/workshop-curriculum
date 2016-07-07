<!--{ ids:[], language:'JavaScript', type:'workshop', order: 20, name:'Logical Operators', description:'List the logical operators and explain what they do.' }-->

### Objectives

After this exercise, you should be able to:



### Example

A loop is a scriptming construct that executes code a certain number of times, usually by iterating on a collection of values or objects. The code continues to execute (or loops) as long as its condition evaluates to true.

In JavaScript, there are four types of loops: for, for...in, while, and do...while. We'll explore examples of each loop and consider when each type is best used.

The for Loop

When we know the exact number of times a block of code must execute, we use a for loop. For that reason, iteration in for loops is usually controlled by a variable that tracks the number of executions.

Consider the for loop below:

for (var i = 0; i < 10; i++) {
  // loop body
}
The first line of the loop, called the loop header, sets the conditions for which the loop will run. The loop body is the statement that executes every time the script loops through its conditions. There are three JavaScript expressions contained in the loop header:

Order	Expression	Example	Description
1.	initialization	var i = 0;	Typically used to initialize a counter variable, such as i, whose value changes after each execution based on the final-expression.
2.	condition	i < 10;	Evaluated before each loop iteration. If this expression evaluates to true, the loop body is executed. This conditional test is optional. If omitted, the condition always evaluates to true.
3.	final-expression	i++	Evaluated at the end of each loop iteration. Generally used to update or increment the counter variable.
Note that a semicolon is not required after the last expression.
We can add a simple console.log() statement to the loop body that prints out some text and the current index of the loop:

for (var i = 0; i < 10; i++) {
  console.log("We're on index number " + i);
}
The output of this loop should look like this:

printing the for loop

### Exercise
