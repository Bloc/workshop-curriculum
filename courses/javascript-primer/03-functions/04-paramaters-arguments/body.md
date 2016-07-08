<!--{ ids:[147], language:'JavaScript', type:'workshop', order: 3, name:'Parameters and Arguments', description:'Declare a function with parameters and call a function with arguments' }-->

### Objectives

After this exercise, you should be able to:

- Declare a function with parameters
- Call a function with arguments

### Example

What if you wanted to personalize your greeting when you say hello to friends? For example:

```
"Hey, what's up Mary Beth? How are you?"
"Hey, what's up Tommen? How are you?"
"Hey, what's up Mahima? How are you?"
```

To achieve this, you only need to make one small change to the previous function:

```js
function greet(name) {
  return "Hey, what's up " + name + "? How are you?";
}
```

Inside the parentheses we've added a __parameter__, which creates a variable that the function body can use.

You give a function a parameter when you want to perform the same operation on different information. In this case, we want to take a name (information) and insert it into a string (operation).  To do so, we __pass__ the information to the function when we call it:

```js
greet("Xavier"); // returns "Hey, what's up Xavier? How are you?"
```

The string `"Xavier"` is an __argument__ that becomes the value of the `name` parameter when the function is called.

If a function has more than one parameter, then they are separated by a comma:

```js
function addSuffix(word, suffix) {
    return word + suffix;
}

addSuffix("awe", "some"); // returns "awesome"
```

The strings `"awe"` and `"some"` are both arguments that become values for the `word` and `suffix` parameters, respectively.

### Exercise

Create a `multiply` function. This function should:

  - take two arguments, both numbers
  - return the result of multiplying the two arguments together

For example:

```js
multiply(10, 10); // returns 100
```
