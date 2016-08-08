<!--{ ids:[176], language:'JavaScript', type:'workshop', order: 2, name:'Add Properties', description:'Add properties with dot or bracket notation' } -->
### Objectives

After this exercise, you should be able to:

- Recognize dot and bracket notation
- Demonstrate how to use dot and bracket notation to add properties to an object

### Example

There are two ways to add properties to an object after it's been defined: __dot notation__ and __bracket notation__.

For example, to add a `size` property to `orange` using dot notation, we would write:

```js
orange.size = "small";
```

To add the same property using bracket notation, we would write:

```js
orange["size"] = "small";
```

The `orange` object now has three key-value pairs:

| Property (Key) | Value      |
| -------------- | ---------- |
| `color`        | `"orange"` |
| `shape`	       | `"round"`  |
| `size`         | `"small"`  |

To get a list (an array, which you'll learn about in the next level) of all the properties (keys) an object has, use the built-in JavaScript `Object.keys()` method with the name of the object as an argument:

```js
Object.keys(orange); // returns ["color", "shape", "size"]
```
