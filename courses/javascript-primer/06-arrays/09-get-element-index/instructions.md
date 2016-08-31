<!--{ ids:[189], language:'JavaScript', type:'workshop', order: 8, name:'Get Element Index', description:'Get the index of an element' } -->

### Exercise

Create a function that allows you to manage a grocery list.

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

