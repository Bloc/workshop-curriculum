<!--{ ids:[186], language:'JavaScript', type:'workshop', order: 5, name:'Add and Remove Elements', description:'Use the `splice()` method to manipulate an array' }-->

### Objectives

After this exercise, you should be able to:

- Demonstrate how to use the `splice()` method to manipulate an array

### Example

JavaScript has one method that changes the content of an array by removing existing elements and/or adding new elements:

- `splice()` method – remove/add elements, return the removed element(s) (if any) in an array

The splice method requires at least two arguments when called:

| Order | Parameter           | Type   | Required? | Description |
| ----- | ------------------- | ------ | --------- | ----------- |
| 1     | `index`             | number | yes       | Specifies at what index to add/remove items. A negative integer can be used to specify a position from the end of the array. |
| 2     | `howmany`           | number | yes       | Specifies the number of elements to remove. If set to 0, no elements will be removed. |
| 3     | `item1, ..., itemN` | any    | no        | The element(s) to add to the array. |

We'll use the numbers array again to demonstrate the splice() method:

```js
var numbers = [1, 2, 3, 4, 5];
```

Remove and return the third element in the array (remember that the third element is at index 2):

```js
var thirdElement = numbers.splice(2, 1);
numbers;      // returns [1, 2, 4, 5]
thirdElement; // returns [3]
```

Remove the first two elements of the array and add three new elements in their place (remember that the first element is at index 0):

```js
var oldStart = numbers.splice(0, 2, "one", "two", "three");
numbers;     // returns ["one", "two", "three", 4, 5]
oldStart;    // returns [1, 2]
```

Lastly, add an element before the last element and remove nothing:

```js
var surprise = numbers.splice(-1, 0, "Hello!");
numbers;     // returns ["one", two", "three", 4, "Hello!", 5]
surprise;    // returns []
```

For this last example, we use a negative integer to specify an indexed position from the _end_ of the array.
