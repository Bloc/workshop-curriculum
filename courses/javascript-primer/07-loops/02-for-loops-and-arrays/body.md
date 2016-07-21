<!--{ ids:[191], language:'JavaScript', type:'workshop', order: 1, name:'For Loops and Arrays', description:'Loops are often used to perform an action on items in an array' }-->

### Objectives

After this exercise, you should be able to:

- Demonstrate how to use a `for` loop to iterate over an array

### Example

`for` loops are often used to perform an action on items in an array. The counter variable (often `i`) in a `for` loop is useful for accessing an item at a given index.

Here's a loop that greets a group of friends:

```js
var friends = ["Troy", "Abed", "Annie"];

for (var i = 0; i < friends.length; i++) {
  console.log("Hi " + friends[i] + "!");
}
```

Using the `length` property is a common pattern that ensures the loop stops once `i` is equal to the length of the array.

The output is of the above loop is:

```
"Hi Troy!"
"Hi Abed!"
"Hi Annie!"
undefined
```

Recall that while `console.log()` prints data to the console, it also returns `undefined`.
