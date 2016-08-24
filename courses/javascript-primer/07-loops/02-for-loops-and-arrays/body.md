<!--{ ids:[191], language:'JavaScript', type:'workshop', order: 1, name:'For Loops and Arrays', description:'Loops are often used to perform an action on items in an array' } -->

### Objectives

After this exercise, you should be able to:

- Demonstrate how to use a `for` loop to iterate over an array

### Example

`for` loops are often used to perform an action on items in an array. The counter variable (often `i` for "iteration") in a `for` loop is useful for accessing an item at a given index.

Here's a loop that greets a group of friends:

```js
var letters = ["a", "b", "c", "d", "e", "f", "g"];
var alphabet = ""

for (var i = 0; i < letters.length; i++) {
  console.log(alphabet += letters[i] + "...");
}
```

Using the `length` property is a common pattern that ensures the loop stops once `i` is equal to the length of the array.

The output is of the above loop is:

```
"a..."
"ab..."
"abc..."
"abcd..."
"abcde..."
"abcdef..."
"abcdefg..."

undefined
```

Recall that while `console.log()` prints data to the console, it also returns `undefined`.
