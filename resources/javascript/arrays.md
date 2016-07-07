We've learned that objects are a way to store data, but JavaScript also uses __arrays__ to store lists of data. An array is a _type_ of JavaScript object (we'll learn more about this in a later checkpoint). Like objects, arrays can store any number of values of any type at the same time. While objects have named properties that hold values, arrays have numerical locations (__indexed__ positions) that hold values. In other words, information in an object is stored without regard to order, but order in an array is important.

## A Simple Array

![An array that has three strings](https://bloc-global-assets.s3.amazonaws.com/screencaps/array.png)

The diagram above visually depicts a list of three fruit names as an array: "apple", "banana", "orange". The fruit names are values located at indexed positions:

| Index | Value      |
| ----- | ---------- |
| 0     | `"apple"`  |
| 1     | `"banana"` |
| 2     | `"orange"` |

Arrays in JavaScript use `0` as a starting index, not `1`.

## Create an Array

To create an array, assign an empty set of brackets `[]` to a variable:

```javascript
var fruits = [];
```

This array contains no values.

We can also create arrays with elements assigned to them. Elements in an array are separated by commas. For example, we could translate the diagram above to the following JavaScript array:

```javascript
var fruits = ["apple", "banana", "orange"];
```

## Get the Length of an Array

We often need to know how many elements are in an array. We get this information by accessing the `length` property, the same property that we can access on a string to know how many characters it has.

For example, to get how many elements are in the `fruits` array:

```javascript
fruits.length; // returns 3
```

Practice creating arrays and getting the length of those arrays.

## Add to an Array

Adding to an array is different from adding to an object because array elements are ordered. To build and add to an array when a program is executing, the most common methods are:

* [`push()` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push) – __add__ an element to the __end__ of an array, returns the new length of the array
* [`unshift()` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) – __add__ an element to the __start__ of an array, returns the new length of the array

```javascript
var myArray = [];

myArray.push("firstElement");  // add an element to the end of the array
myArray;                       // returns ["firstElement"]

myArray.push("secondElement"); // add an element to the end of the array
myArray;                       // returns ["firstElement", "secondElement"]

myArray.unshift(3);            // add an element to the start of the array
myArray;                       // returns [3, "firstElement", "secondElement"]

myArray.push(4);               // add an element to the end of the array
myArray;                       // returns [3, "firstElement", "secondElement", 4]
```

Practice the `push()` and `unshift()` array methods.

## Remove from an Array

Two methods used frequently for removing array elements are:

* [`pop()` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) – __remove__ an element from the __end__ of an array, return that element
* [`shift()` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) – __remove__ an element from the __start__ of the array, return that element

These methods are the inverse of `push()` and `unshift()`.

For example, let's create an array named `numbers`:

```javascript
var numbers = [1, 2, 3, 4, 5];
```

Let's use the `pop()` method to remove and return the last element in the array:

```js
var lastElement = numbers.pop();
numbers;      // last element removed, prints [1, 2, 3, 4]
lastElement;  // last element returned, prints 5
```

Next, let's use the `shift()` method to remove and return the first element in the array:

```js
var firstElement = numbers.shift();
numbers;      // first element removed, prints [2, 3, 4]
firstElement; // first element returned, prints 1
```

Practice the `pop()` and `unshift()` array methods.

## Add and Remove from an Array

JavaScript has a single method that changes the content of an array by removing existing elements and/or adding new elements:

* [`splice()` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) – __remove__/__add__ elements, return the removed element(s) (if any) in an array

The `splice` method requires at least two arguments when called:

| Order | Parameter | Type   | Required? | Description |
| ----- | --------- | ------ | --------- | ----------- |
| 1     | _index_   | number | yes       | Specifies at what index to add/remove items. A negative integer can be used to specify a position from the end of the array. |
| 2     | _howmany_ | number | yes       | Specifies the number of elements to remove. If set to `0`, no elements will be removed. |
| 3     | _item1_, ..., _itemN_ | any | no | The element(s) to add to the array. |

We'll use the `numbers` array again to demonstrate the `splice()` method:

```javascript
var numbers = [1, 2, 3, 4, 5];
```

Remove and return the third element in the array (remember that the third element is at index `2`):

```javascript
var thirdElement = numbers.splice(2, 1);
numbers;      // returns [1, 2, 4, 5]
thirdElement; // returns [3]
```

Remove the first two elements of the array and add three new elements in their place (remember that the first element is at index `0`):

```javascript
var oldStart = numbers.splice(0, 2, "one", "two", "three");
numbers;     // returns ["one", "two", "three", 4, 5]
oldStart;    // returns [1, 2]
```

Lastly, add an element before the last element and remove nothing:

```javascript
var surprise = numbers.splice(-1, 0, "Hello!");
numbers;     // returns ["one", two", "three", 4, "Hello!", 5]
surprise;    // returns []
```

For this method, we use a negative integer to specify an indexed position from the end of the array, which is useful because we may not know the length of an array when performing an operation.

Practice the `splice()` array method.

## Method Chaining

Method chaining is a technique that simplifies calling multiple functions on the same object consecutively (remember that arrays _are_ objects). For method chaining to work, the first method called must return an object that the next invoked method can use.

Let's start with our simple `fruits` array:

```javascript
var fruits = ["banana", "apple", "orange"];
```

The following methods, performed in this order:

```javascript
fruits.sort();
fruits.push("kiwi");
fruits; // returns ["apple", "banana", "orange", "kiwi"]
```

is the same as:

```javascript
fruits.sort().push("kiwi");
fruits; // returns ["apple", "banana", "orange", "kiwi"]
```

We call two methods on the `fruits` array in the above example: `sort()` and `push()`, and we do it on the same line. This is possible because the [`sort()` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) returns the array after it has been sorted (in this case, in alphabetical order). We can then call the `push()` method on the sorted array and add a new item to the array.

The order of the methods matter and certain methods cannot precede other methods in a chain. For example, if we were to reverse the methods above and call `fruits.push("kiwi").sort();`, we might expect `["apple", "banana", "kiwi", "orange"]` to be logged to the console, but that is not the case. Instead, we would receive a type error. The `push()` method does not return the array with the new item pushed to it – it returns the length of the new array, which is a number. By calling the `push()` method before the `sort()` method, we are telling the program to sort a number, not an array.

Research other [array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Mutator_methods) and determine at least one other pair of methods that you can chain together:

## Access Elements

We can use dot or bracket notation to access object properties. Because valid variables names cannot begin with a number, we use bracket notation instead of dot notation to access array elements.

> It's important to note, however, that an array, like any JavaScript object, can have named properties. We saw an example of this earlier, with the `length` property. The difference is that these named properties are built into JavaScript.

In the example diagram at the start of this checkpoint, the index of each element is displayed below its corresponding position in the array. Because arrays in JavaScript use zero-based numbering, the indices for the `fruits` array range from `0` to `2` rather than `1` to `3`. To get the first element in the `fruits` array, we need to access index `0`:

```javascript
var fruits = ["apple", "banana", "orange"];

fruits[0]; // returns "apple"
fruits[1]; // returns "banana"
fruits[2]; // returns "orange"
fruits[3]; /* returns `undefined` because this index attempts
              to access a fourth element which doesn't exist */
```

Getting the last element index is a common operation to retrieve the value of the last element. To get the last element index, get the `length` of the array and subtract `1`:

```javascript
var lastElementIndex = fruits.length - 1;
```

With bracket notation, the variable `lastElementIndex` evaluates to `2`:

```javascript
fruits[lastElementIndex]; // returns "orange"
```

## Get the Index of an Element

Alternatively, JavaScript has a method to get the index of an element:

* [`indexOf()` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) – return the _first_ index at which a given element can be found in the array, or `-1` if it is not present

For example:

```javascript
var fruits = ["apple", "banana", "orange"];
fruits.indexOf("banana"); // returns 1

var justBananas = ["banana", "banana", "banana"];
justBananas.indexOf("banana"); // prints 0
```

## Overwrite Array Elements

To overwrite an array element, use the same notation used for accessing a value along with a `=` to assign the new value:

```javascript
var fruits = ["apple", "banana", "orange"];

fruits[1] = "apple"; // assign "apple" to index 1 of the array
fruits;              // returns ["apple", "apple", "orange"]

var lastElementIndex = fruits.length - 1;
fruits[lastElementIndex] = "apple"; // assign "apple" to the last index of the array
fruits;                             // prints ["apple", "apple", "apple"]
```

Practice accessing array elements as well as overwriting them with new values.

## Recap

| **Concept** | **Description** |
| ----------- | --------------- |
| [Arrays](http://www.w3schools.com/js/js_arrays.asp) | An array is a type of JavaScript object that stores an indexed list of data. |
| Index | Arrays in JavaScript use 0 as a starting index. |
| [Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_2) | Array methods are built-in JavaScript operations that can be called on array objects. |
| []() |  |
