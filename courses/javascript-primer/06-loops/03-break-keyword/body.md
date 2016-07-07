<!--{ ids:[], language:'JavaScript', type:'workshop', order: 20, name:'Logical Operators', description:'List the logical operators and explain what they do.' }-->

### Objectives

After this exercise, you should be able to:



### Example

The break Keyword

There are two keywords that perform special operations in JavaScript loops: break and continue.

Similar to using break in a switch statement, using break in a loop discontinues the loop, usually in response to a certain condition. For example, if we run into Abed, instead of greeting him, we'd rather just walk away because he's weird (and we don't want to watch Six Candles again). To accomplish this, we could break the loop when it arrives at his name:

var friends = ["Troy", "Abed", "Annie"];

for (var i = 0; i < friends.length; i++) {
  if (friends[i] === "Abed") {
    break;
  } else {
    console.log("Hi, " + friends[i] + "!");
  }
}
The output of this loop is:

"Hi, Troy!"
undefined

### Exercise
