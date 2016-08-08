### Exercise

In this exercise you'll create a script that allows you to manage a grocery list. You'll need to create two functions for this script, each of which is detailed below.

Create an `addItem` function. This function should:

  - take two arguments:
      1. an item to add to the grocery list
      2. the grocery list (array) to add the item to
  - only add an item if it doesn't already exist in the array

For example:

```js
var groceryList = ["apples", "oranges"];
addItem("carrots", groceryList); // returns ["apples", "oranges", "carrots"]
addItem("apples", groceryList);  /* returns ["apples", "oranges"]
                                    since "apples" was already on the list */
```

Create a `reverseSortedList` function. This function should:

  - take one argument, an array
  - return the array sorted but in reverse

For example:

```js
var groceryList = ["apples", "oranges", "kiwis"];
reverseSort(groceryList); // returns ["oranges", "kiwis", "apples"]
```
