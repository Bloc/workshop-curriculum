<!--{ ids:[178], language:'JavaScript', type:'workshop', order: 4, name:'Object as a Value', description:'A value can be of any data type' }-->

### Objectives

After this exercise, you should be able to:

- Demonstrate how to assign an object as the value of a property
- Demonstrate how to access the values of nested object properties

### Example

Consider the following table of information:

| Buildings    | Location | Height (in ft) |
| ------------ | -------- | -------------- |
| Empire State | New York | 1250           |
| Eiffel Tower | Paris    | 984            |

There are two buildings, each of which has a location and height given in feet. We could create two separate objects, one for `empireState` and one for `eiffelTower`, and use those objects to access their associated information. Often, however, it's necessary to group larger sets of information to create a single access point. For example:

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

We've structured the data in a way that assigns all of the information to an object named `buildings`. This object has two properties, `empireState` and `eiffelTower`. Both of these properties are assigned objects as values.

To access the value `"New York"`, which is nested within two objects, you can chain properties together using dot or bracket notation:

```js
buildings.empireState.location;       // returns "New York"
buildings["empireState"]["location"]; // returns "New York"
```

First, we choose the `buildings` object which has a property named `empireState`. `empireState` is also an object and has a property named `location`:

`buildings` &rarr; `empireState` &rarr; `location`

While this example shows property chaining two levels deep, it's possible to make many relationships between objects and grow the chain infinitely. Be wary of nesting data too deep, as it can become difficult to manage.
