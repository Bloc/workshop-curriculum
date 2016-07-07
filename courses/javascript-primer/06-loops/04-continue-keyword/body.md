<!--{ ids:[], language:'JavaScript', type:'workshop', order: 20, name:'Logical Operators', description:'List the logical operators and explain what they do.' }-->

### Objectives

After this exercise, you should be able to:



### Example

The continue Keyword

continue skips a code block, also usually in response to a certain boolean condition. Instead of walking away when we see Abed, we can use continue to skip over greeting Abed and continue with greeting Annie:

var friends = ["Troy", "Abed", "Annie"];

for (var i = 0; i < friends.length; i++) {
  if (friends[i] === "Abed") {
    continue;
  } else {
    console.log("Hi, " + friends[i] + "!");
  }
}
The output of this loop is:

"Hi, Troy!"
"Hi, Annie!"
undefined
We can use the break and continue keywords in all types of JavaScript loops.

Practice using break and continue in for loops:

### Exercise
