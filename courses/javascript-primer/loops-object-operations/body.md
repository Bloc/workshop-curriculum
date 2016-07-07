1. Write a function called `copy`. This function should:
    - take one object as an argument
    - create a new object and copy all of the properties of the input into the new object
    - return the new object

    For example:

    ```js
    copy({name: "Marcia"}) // returns a new object {name: "Marcia"}
    ```

2. Write a function called `extend`. This function should:
    - take two dictionaries (objects) as arguments (`dest` and `src`) and copy all of the properties (e.g. key, value pairs) of `src` into `dest`
    - return a modified `dest`

    For example:

    ```js
    extend({name: "Marcia"}, {age: 101}) // should modify and return `dest` with content of {name: "Marcia", age: 101}

    extend({name: "Marcia"}, {name: "Steve"}) // should modify and return `dest` with content of {name: "Steve"}
    ```

3. Write a function called `containsValue`. This function should:
    - take two arguments
        - the first argument should be a value
        - the second argument should be an object
    - check to see if a passed value is equal to the value of any property found in the passed object
        - return `true` if the value is present
        - return `false` otherwise

    For example:

    ```js
    var obj = {name: "Marcia", age: 25};

    containsValue("Marcia", obj);  // returns true
    containsValue("Jane", obj); // returns false
    containsValue(25, obj); // returns true
    ```
