<!-- { ids:[], language:'JavaScript', type:'workshop', order: 0, name:'Global Scope', description:'All functions can access variables the global scope' }-->

### Objectives

- State the importance of scope
- Recognize when a variable is in the global scope

### Example

__Scope__ determines which variables a function can access. The JavaScript scope model is known as _lexical scope_, where code may only access variables defined in the same block.

There are two types of scope: global and local. Variables declared in the __global scope__, outside of any functions, are properties of the global object to which all functions in the script have access. For example:

```js
var globalString = "I exist globally!";

var globalFunction = function() {
  return globalString;
};

globalFunction(); // returns "I exist globally!"
```

The variables `globalString` and `globalFunction` are both part of the global scope (properties on the global object). `globalFunction` has access to the `globalString` variable. Anything defined in the global scope is accessible by any other part of the script.

### Exercise

1. Declare a variable in the global scope named `city`.
2. Assign this variable the name of the city where you live.
3. If declared correctly, the function `getCity` should return the name of your city.
