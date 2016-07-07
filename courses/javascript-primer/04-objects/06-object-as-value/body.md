<!--{ ids:[], language:'JavaScript', type:'workshop', order: 20, name:'Logical Operators', description:'List the logical operators and explain what they do.' }-->

### Objectives

After this exercise, you should be able to:



### Example

An Object as a Value

As mentioned at the start of the checkpoint, a value can be any type: string, number, boolean, undefined, null, or even another object. Assigning an object as the value of a property may seem complicated at first; let's look at an example:

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
To access properties of objects set as properties, we chain properties together using dot or bracket notation. For property chaining to work, the first property we access must return an object which holds the property we want to access:

buildings.empireState.heightInFt; // returns 1250
or

buildings["empireState"]["heightInFt"]; // returns 1250
First, we access the empireState property on the buildings object, then we access the heightInFt property on the empireState object:

buildings > empireState > heightInFt

While this example shows property chaining two levels deep, it's possible to make many relationships between objects and grow the chain infinitely. In general, however, chains are usually no more than a few levels deep.

Practice creating objects as properties of other objects and chaining properties to access values:

### Exercise
