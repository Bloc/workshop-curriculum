In this exercise you'll create a script that allows you to manage a grocery list. You'll need to create two functions for this script, each of which is detailed below.

1. Create an `addItem` function. This function should:
    - take two arguments:
        - the first argument is the item you want to add to the end of the array.
        - the second argument is the array that the item will be added to.
    - only add an item if it doesn't already exist in the array.

    For example:

    ```js
    addItem(1, [5,3,2]); // returns [5,3,2,1]
    addItem("brown", ["green", "yellow"]);          // returns ["green", "yellow", "brown"]
    addItem("brown", ["green", "yellow", "brown"]); // returns ["green", "yellow", "brown"] since "brown" was already present
    ```

2. Create a `reverseSortedList` function. This function should:
    - take one argument, an array.
    - return the array sorted but in reverse.

    For example:

    ```js
    reverseSortedList([2,4,1,5,3]);          // returns [5,4,3,2,1]
    reverseSortedList(["b", "c", "t", "a"]); // returns ["t", "c", "b", "a"]
    ```
