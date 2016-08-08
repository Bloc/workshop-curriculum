<!--{ ids:[177], language:'JavaScript', type:'workshop', order: 3, name:'Access Properties', description:'Access properties in different ways' }-->

### Objectives

After this exercise, you should be able to:

- Demonstrate how to access properties using dot or bracket notation
- Explain the differences between dot and bracket notation

### Example

To access a property and get its assigned value, use dot or bracket notation as well.

Dot notation:

```js
orange.color;   // returns "orange"
```

Bracket notation:

```js
orange["shape"] // returns "round"
```

Both dot and bracket notation allow you to add and access properties, though dot notation is preferred because it is more terse. Bracket notation must be used, however, if the property name has whitespace, special characters, is a variable, or starts with a number. This is due to a major difference between the two notations.

Dot notation requires a valid identifier that _directly names_ a property.
Bracket notation, however, _evaluates_ the expression between the brackets (`[]`).
That is, both `someObject.x` and `someObject[x]` try to access a property on `someObject`, but it may not be the same property. For example:

```js
var randomVar = "size";

orange[randomVar]; // returns "small"
orange.randomVar;  // returns undefined
```

By using bracket notation, JavaScript _evaluates_ `randomVar` to be `"size"`, which is a property that exists on the `orange` object and has a value of `"small"`. `orange[randomVar]`, then, is equivalent to `orange["size"]`.

If we try to use this variable with dot notation, however, it does not work. The script does not evaluate the variable, instead it tries to find a property named `randomVar`, which does not exist.
