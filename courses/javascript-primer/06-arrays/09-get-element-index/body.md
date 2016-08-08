<!--{ ids:[189], language:'JavaScript', type:'workshop', order: 8, name:'Get Element Index', description:'Get the index of an element' }-->

### Objectives

After this exercise, you should be able to:

- Demonstrate how to get the index of an element

### Example

Alternatively, JavaScript has a method to get the index of an element:

- `indexOf()` method – return the first index at which a given element can be found in the array, or -1 if it is not present

For example:

```js
var fruits = ["apple", "banana", "orange"];
fruits.indexOf("banana");      // returns 1
fruits.indexOf("kiwis");       // returns -1

var justBananas = ["banana", "banana", "banana"];
justBananas.indexOf("banana"); // returns 0
```
