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
