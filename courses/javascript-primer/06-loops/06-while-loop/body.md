<!--{ ids:[], language:'JavaScript', type:'workshop', order: 20, name:'Logical Operators', description:'List the logical operators and explain what they do.' }-->

### Objectives

After this exercise, you should be able to:



### Example

The while Loop

The while loop is most commonly used when it is unclear how many times a loop must run. Like a for loop, a while loop runs until a certain condition is no longer true. This means that all for loops can be re-written as while loops. Here's our first for loop translated to a while loop:

var i = 0;

while (i < 10) {
  console.log("We're on index number " + i);
  i++;
}
The condition that will end the loop when it evaluates to false is in parentheses to the right of the while keyword. Variable creation and assignment must be done before the while loop is declared. Changes to the counter variable (i) must be made within the body of the loop.

Although we can rewrite any for loop as a while loop, a while loop does not require a counter variable. For example:

while (true === true) {
  console.log("Beware... I'm an infinite loop.");
}
We can check any condition and execute any statement. The above example, however, creates an infinite loop. If you create an infinite loop, you'll likely need to quit the script by force (i.e. close the browser).

Practice creating while loops:

### Exercise
