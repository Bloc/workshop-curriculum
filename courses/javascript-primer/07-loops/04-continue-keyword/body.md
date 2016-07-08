<!--{ ids:[193], language:'JavaScript', type:'workshop', order: 3, name:'Continue Keyword', description:'And sometimes we're in an on-again-off-again sort of mood...' }-->

### Objectives

After this exercise, you should be able to:

- Explain the purpose of the `continue` keyword within a loop

### Example

The `continue` keyword skips a code block, also usually in response to a certain boolean condition. Instead of walking away when we see Abed, we can use `continue` to skip greeting Abed and continue with greeting Annie:

```js
var friends = ["Troy", "Abed", "Annie"];

for (var i = 0; i < friends.length; i++) {
  if (friends[i] === "Abed") {
    continue;
  } else {
    console.log("Hi " + friends[i] + "!");
  }
}
```

The output of this loop is:

```
"Hi Troy!"
"Hi Annie!"
undefined
```

We can use the `break` and `continue` keywords in all types of JavaScript loops.

### Exercise

The number 13 may be unlucky, but we don't believe in that too much... not really... just a little maybe. Just to be safe, we'll avoid that number, but we need to get on with our life and our `for` loops.

Update the loop so that if 13 is a number between `num1` and `num2` (inclusive), then the loop skips it (the number 13) and continues to push the rest of the numbers to the array.
