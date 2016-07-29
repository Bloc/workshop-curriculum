Strings and numbers in JavaScript are primitives, as we've learned, along with booleans, `undefined`, and `null`. Everything else in JavaScript is an __object__, which is a way to store data and functions in one location.

In JavaScript, objects are a collection of properties and values. A __property__ (sometimes referred to as a _tag_ or _key_) names a location used to access a __value__. A value can be any type: string, number, boolean, `undefined`, `null`, or even another object, including functions and arrays.

JavaScript objects are like dictionaries. A dictionary is a set of data, while the words in a dictionary are single elements that are assigned definitions. When we want to retrieve a definition (a __value__), we use a word (a __property__) to locate that information in a dictionary. Unlike a dictionary, however, in which words are ordered alphabetically, you are not required to order object properties in a particular way.

## A Simple Object

![an orange](https://upload.wikimedia.org/wikipedia/commons/f/f2/Citrus_reticulata.jpg)

Consider the object shown above. It's called an orange. We know (or at the very least, presume) it's an orange because of certain properties it exhibits. For example, its color is orange and its shape is round:

| Property | Value  |
| -------- | ------ |
| color    | orange |
| shape    | round  |

JavaScript objects, like real-world objects, have properties which we use to access values.

## Create an Object

One way to create an object is to assign an empty set of curly braces to a variable. To create an object named `orange`, we would write:

```js
var orange = {};
```

An object created via curly braces is an __object literal__. Additionally, because the curly braces are empty, we've created an object with no properties.

## Create an Object with Properties

You can also assign properties to an object when you create it. For example:

```js
var orange = {
  color: "orange",
  shape: "round"
};
```

We've added `color` and `shape` properties to the `orange` object. The pairs of property names and associated values are structured with the property name to the left, followed by a colon, followed by the value. The pairs are separated by a comma, where the last pair of the list does not end with a comma:

| Property | Colon | Value      | Comma  |
| -------: | :---: | :--------- | :----- |
| `color`  | `:`   | `"orange"` | `,`    |
| `shape`  | `:`   | `"round"`  | &nbsp; |

Property names are converted to strings by the JavaScript compiler. In general, write property names the same as variable names.

## Add Properties to an Object

To add a property to an object, we can use either __dot syntax__ or __bracket syntax__. For example, let's add a property to the `orange` object, which already has two properties (`color` and `shape`).

To add a `size` property to `orange` using dot syntax, we would write:

```js
orange.size = "small";
```

To add the same property using bracket syntax, we would write:

```js
orange["size"] = "small";
```

The `orange` object now has two property-value pairs:

| Property | Value      |
| -------- | ---------- |
| `color`  | `"orange"` |
| `shape`  | `"round"`  |
| `size`   | `"small"`  |

## Get a List of Object Properties

To get a list (an array, which you'll learn about in the next checkpoint) of all the properties (keys) an object has, use the `Object.keys()` method with the name of the object as an argument:

```js
Object.keys(orange); // returns ["color", "shape", "size"]
```

Practice creating objects with and without properties, as well as adding properties to an object after it's been declared. Additionally, practice using the `Object.keys()` method.

## Access Properties

To access a property, we also use dot or bracket notation.

Dot notation:

```js
orange.color;   // returns "orange"
```

Bracket notation:

```js
orange["shape"] // returns "round"
```

## Dot and Bracket Notation Differences

Both dot and bracket notation allow us to add and access properties, though dot notation is preferred because it is more terse. Bracket notation must be used, however, if the property name has whitespace, special characters, is a variable, or starts with a number. This is due to a major difference between the two notations:

* Dot notation requires a valid variable name that directly names a property.
* Bracket notation, however, *evaluates* the expression between the brackets `[]`.

That is, both `someObject.x` and `someObject[x]` try to access a property on `someObject`, but it may not be the same property. For example:

```js
var randomVariable = "size";

orange[randomVariable]; // returns "small"
```

By using bracket notation, JavaScript evaluates `randomVariable` to be `"size"`, which is a property that exists on the `orange` object and has a value of `"small"`.

In this example, `orange[randomVariable]` is the same as `orange["size"]`.

If we try to use this variable with dot notation, however, it does not work. The program tries to find a property named `randomVariable` which doesn't exist:

```js
orange.randomVariable // returns `undefined`
```

Practice using dot and bracket notation to access values.

## An Object as a Value

As mentioned at the start of the checkpoint, a value can be any type: string, number, boolean, `undefined`, `null`, or even another object. Assigning an object as the value of a property may seem complicated at first; let's look at an example:

```js
var buildings = {
  empireState: {
    location: "New York",
    heightInFt: 1250
  },
  eiffelTower: {
    location: "Paris",
    heightInFt: 984
  }
};
```

To access properties of objects set as properties, we __chain__ properties together using dot or bracket notation. For property chaining to work, the first property we access must return an object which holds the property we want to access:

```js
buildings.empireState.heightInFt; // returns 1250
```

or

```js
buildings["empireState"]["heightInFt"]; // returns 1250
```

First, we access the `empireState` property on the `buildings` object, then we access the `heightInFt` property on the `empireState` object:

`buildings` > `empireState` > `heightInFt`

While this example shows property chaining two levels deep, it's possible to make many relationships between objects and grow the chain infinitely. In general, however, chains are usually no more than a few levels deep.

Practice creating objects as properties of other objects and chaining properties to access values.

## A Function as a Value

When the value of a property is a function, it's known as a __method__. For example, we'll create an object named `student` with a `learn` method:

```js
var student = {
  learn: function(subject) {
    console.log("I'm learning " + subject + "!");
  }
};
```

We call a method by using dot notation and including `()` with any arguments the function may require:

```js
student.learn("JavaScript"); // prints "I'm learning JavaScript!"
```

Practice creating methods and calling them. Try creating methods that require arguments.

## Update a Property's Value

We can update a property's value by assigning it a new value. For example:

```js
var orange = {};

orange.color = "orange";
orange.color; // returns "orange"

orange.color = "red";
orange.color; // returns "red"
```

By assigning `orange.color` a value of `"red"`, we overwrite the previous value of `"orange"`.

![update object property value](https://bloc-global-assets.s3.amazonaws.com/images-frontend/screenshots/15-objects/objects_prop_update.gif)

Practice overwriting property values.

## Recap

| **Concept** | **Description** |
| ----------- | --------------- |
| [Objects](http://www.w3schools.com/js/js_object_definition.asp) | In JavaScript, objects are organized into a collection of property and value pairs. |
| [Properties](http://www.w3schools.com/js/js_properties.asp) | A property names a location used to access a value. |
| Values | A value can be any type: strings, numbers, booleans, `undefined`, `null`, or even another object, including a function or array. |
| [Dot and Bracket Syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors) | Both dot and bracket notation allow you to add and access properties, though dot notation is preferred because it is more terse. |
