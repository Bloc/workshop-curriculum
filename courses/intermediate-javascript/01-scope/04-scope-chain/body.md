<!-- { ids:[], language:'JavaScript', type:'workshop', order: 3, name:'The Scope Chain', description:'If a variable doesn't exist in the immediate scope, look in the parent scope' }-->

### Objectives

- Analyze code to determine the scope chain

### Example

In the event that a function references a variable and does not find the variable in its local scope, it searches its parent scope:

```js
var globalString = "I exist globally!";

var globalFunction = function() {
  return globalString; /* when called, will return
                          "I exist globally!" */
};
```

The scope chain dictates this lookup process: if a function references a variable not found in its local scope, then its parent scope is consulted; if the variable is not found in the parent scope, then the next outer scope is consulted, continuing until the search reaches the outermost (global) scope.

The scope chain lookup process can be outlined as a series of steps:

1. Does `globalFunction` have a local variable named `globalString`? _No, check the parent scope._
2. Does the global object have a local variable named `globalString`? _Yes, stop looking. Allow `globalFunction` to access this variable._

The same is true for nested functions and their scopes:

```js
var newYorkCity = function() {
  var localString = "I exist in New York City!";

  var centralPark = function() {
    return localString; /* when called, will return
                           "I exist in New York City!" */
  };
};
```

1. Does `centralPark` have a local variable named `localString`? _No, check the parent scope._
2. Does `newYorkCity` have a local variable named `localString`? _Yes, stop looking. Allow `centralPark` to access this variable._

If `newYorkCity` did not have a `localString` variable, then `centralPark` would search again in the next immediate scope – in this case, the global scope.

### Exercise

Analyze the code found in the editor and determine which array, if any, will be returned on line 17 where the function `goldenGatePark` is called. Each of the arrays is given a number value (1-4) in a comment on the same line as the array.

If you think the function _won't_ return any of the arrays, assign a value of `0` to `goldenGateParkReturns` like so:

```js
var goldenGateParkReturns = 0;
```

If you think the function will return an array, such as `["you", "me", "and everyone we know"]`, then assign its corresponding number value to `goldenGateParkReturns` like so:

```js
var goldenGateParkReturns = 1;
```
