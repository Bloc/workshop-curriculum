<!-- { ids:[], language:'JavaScript', type:'workshop', order: 2, name:'Shadowing', description:'Variables in different scopes that use the same name shadow each other' }-->

### Objectives

- State what shadowing is
- Demonstrate an understanding of shadowing

### Example

Functions nested inside other functions create nested scopes and varying degrees of locality. That is, global variables are always global, but local variables are relative to the immediate functions in which they are declared.

Consider:

```js
var localString = "I exist globally";
localString;            // returns "I exist globally"

var newYorkCity = function() {
  var localString = "I exist in New York City!";

  var centralPark = function() {
    var localString = "I exist in Central Park!";
    return localString; /* when called, will return
                           "I exist in Central Park!" */
  };

  return localString;   /* when called, will return
                           "I exist in New York City!" */
};
```

`centralPark` is nested inside `newYorkCity` – that is, `centralPark` exists within `newYorkCity`'s local scope. Each function, in turn, has its own local scope.

Both `centralPark` and `newYorkCity` have variables in their respective local scopes named `localString`. When each function tries to return the value of `localString`, they search their own local scopes first and find the matching variable name.

Having varying degrees of locality means we can declare variables by the same name in different scopes and utilize them as separate entities. Declaring variables by the same name in different scopes is known as __shadowing__.

### Exercise

Update the `siliconValley` function so that it has its own `locals` variable. When the function is called, it should return the array `["startups", "Google", "Facebook"]`:

```js
siliconValley(); // returns ["startups", "Google", "Facebook"]
```
