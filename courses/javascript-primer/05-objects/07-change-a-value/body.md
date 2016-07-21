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

