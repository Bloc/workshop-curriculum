1. Write a function called `getKeys`. This function should:
    - accept one argument, an object
      - return an array of each of the keys in the object

    For example:

    ```js
    getKeys({name: "Marcia", age: 101}) // returns ["name", "age"]
    ```

2. Write a function called `getValues`. This function should:
    - accept one argument, an object
        - return an array of each of the values in the object

    For example:

    ```js
    getValues({name: "Marcia", age: 101}) // returns ["Marcia", 101]
    ```

3. Write a function called `objectToArray`. This function should:
    - convert the object passed in to an array of strings
    - each string should be in the format of "[key] is [value]" for each key/value pair in the object
    - if an empty object is passed in, an empty array should be returned

    For example:

    ```js
    objectToArray({name: "Marcia", age: 101}) // returns ["name is Marcia", "age is 101"]
    ```
