<!--{ ids:[], language:'JavaScript', type:'workshop', order: 20, name:'Logical Operators', description:'List the logical operators and explain what they do.' }-->

### Objectives

After this exercise, you should be able to:



### Example

The do...while Loop

The do...while loop is an antiquated looping pattern that executes code in a similar way to the while loop. Code is executed in a do block, and conditions for execution are set after the loop. Here's how we'd rewrite the previous while loop using the do...while syntax:

var i = 0;

do {
  console.log("We're on index number " + i);
  i++;
} while (i < 10);
The only major difference between the while and the do...while is the time at which the conditions for exiting the loop are checked. while loops check if the condition is true before the loop body runs, and the do...while loop waits until after the loop body runs. This means that a do…while code block will always execute at least once.

### Exercise
