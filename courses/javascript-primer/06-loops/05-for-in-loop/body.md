<!--{ ids:[], language:'JavaScript', type:'workshop', order: 20, name:'Logical Operators', description:'List the logical operators and explain what they do.' }-->

### Objectives

After this exercise, you should be able to:



### Example

The for...in loop

The for...in loop iterates through all enumerable properties in an object or array. This means that there is no need to set a series of conditions that tell the loop when to stop and how to progress. When the loop reaches the end of the enumerable properties, it exits.

For the purposes of understanding loops, "enumerable properties" refers to any properties you've assigned to an object or any elements you've added to an array. For example, we know that we can access the length property of an array because it's built into JavaScript; because of this, the length property is not enumerable and a for...in loop will not iterate over it.
We use the for…in loop to iterate over the properties of an object. It is possible to use it with arrays, but the loop does not guarantee a particular order. Therefore, use for…in exclusively with objects and for with arrays.

The following code loops through an object's properties and prints out the property and value in a descriptive string. Run it in JS Bin:

var theObject = { color: "red", size: 10, shape: "square" };

for (var property in theObject) {
  console.log("The " + property + " of the object is " + theObject[property]);
}
The output of this loop is:

"The color of the object is red"
"The size of the object is 10"
"The shape of the object is square"
undefined
Like the for loop's counter variable, for...in requires that you declare a variable (var property) to hold the properties referenced in each stage of the loop. The object (theObject) that contains the properties through which the loop will iterate must follow the in.

Create an object and practice using the for...in loop to iterate over the object's properties:

### Exercise
