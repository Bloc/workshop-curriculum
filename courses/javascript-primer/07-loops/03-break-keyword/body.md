<!--{ ids:[192], language:'JavaScript', type:'workshop', order: 2, name:'Break keyword', description:'Sometimes you just need a break from doing the same thing over and over...' }-->

### Objectives

After this exercise, you should be able to:

- Explain the purpose of the `break` keyword within a loop

### Example

There are two keywords that perform special operations in JavaScript loops: `break` and `continue`.

Similar to using `break` in a `switch` statement, using `break` in a loop discontinues the loop, usually in response to a certain condition.

For example, if we run into our friend Abed, instead of greeting him, we'd rather just walk away because he's weird and we're tired of his movie references. To accomplish this, we could break the loop when it arrives at his name:

```js
var friends = ["Troy", "Abed", "Annie"];

for (var i = 0; i < friends.length; i++) { // loop through each element in the array
  if (friends[i] === "Abed") {             // check if an element is equal to "Abed"
    break;
  } else {
    console.log("Hi " + friends[i] + "!");
  }
}
```

The output of this loop is:

```
"Hi Troy!"
undefined
```
