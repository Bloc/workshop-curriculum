<!--{ ids:[180], language:'JavaScript', type:'workshop', order: 6, name:'Change a Value', description:'Changing a value is as simple as assigning one' }-->

### Objectives

After this exercise, you should be able to:

- Demonstrate how to change the value of a property

### Example

Similar to updating the value of a variable, you can update the value of a property by assigning it a new value. For example:

```js
var orange = {
  color: "orange"
};

orange.color; // returns "orange"

orange.color = "red";
orange.color; // returns "red"
```

By assigning `orange.color` a value of `"red"`, we overwrite the previous value of `"orange"`.

### Exercise

Some blueberries aren't so tiny. Like this one, for example:

<center>![willy wonka blueberry](https://s-media-cache-ak0.pinimg.com/564x/e0/86/90/e0869095145d679c238b85387af7208a.jpg)</center>

Change the value of `size` to `"enormous"`, but do not alter the original object definition.
