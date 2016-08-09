<!--{ ids:[184], language:'JavaScript', type:'workshop', order: 3, name:'Add Elements', description:'Add elements to an array' } -->
### Objectives

After this exercise, you should be able to:

- Demonstrate how to add elements to an array
- Demonstrate how to change the values of elements in an array
- Recognize array methods

### Example

Adding elements to an array is different from adding properties to an object because array elements are ordered. Like the built-in `length` property, JavaScript has some built-in array methods that you can use to manipulate arrays.

To add to an array, the most common methods are:

- `push()` method – add an element to the end of an array, return the new length of the array
- `unshift()` method – add an element to the start of an array, return the new length of the array

```js
var myArray = [];
var arrayLength;

arrayLength = myArray.push("firstElement");
arrayLength;       // returns 1
myArray;           // returns ["firstElement"]

arrayLength = myArray.unshift(3);
arrayLength;       // returns 2
myArray;           // returns [3, "firstElement"]

arrayLength = myArray.push(4);
arrayLength;       // returns 3
myArray;           // returns [3, "firstElement", 4]
```

To change the value of an array element that already exists, use the assignment operator (`=`) to assign the new value:

```js
var fruits = ["apple", "banana", "orange"];

fruits[2] = "apple"; // assign "apple" to index 2
fruits;              // returns ["apple", "banana", "apple"]
```
