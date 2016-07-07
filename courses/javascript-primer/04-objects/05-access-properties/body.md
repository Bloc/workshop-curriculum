<!--{ ids:[], language:'JavaScript', type:'workshop', order: 20, name:'Logical Operators', description:'List the logical operators and explain what they do.' }-->

### Objectives

After this exercise, you should be able to:



### Example

Access Properties

To access a property, we also use dot or bracket notation.

Dot notation:

orange.color;   // returns "orange"
Bracket notation:

orange["shape"] // returns "round"
Dot and Bracket Notation Differences

Both dot and bracket notation allow us to add and access properties, though dot notation is preferred because it is more terse. Bracket notation must be used, however, if the property name has whitespace, special characters, is a variable, or starts with a number. This is due to a major difference between the two notations:

Dot notation requires a valid variable name that directly names a property.
Bracket notation, however, evaluates the expression between the brackets [].
That is, both someObject.x and someObject[x] try to access a property on someObject, but it may not be the same property. For example:

var randomVariable = "size";

orange[randomVariable]; // returns "small"
By using bracket notation, JavaScript evaluates randomVariable to be "size", which is a property that exists on the orange object and has a value of "small".

In this example, orange[randomVariable] is the same as orange["size"].

If we try to use this variable with dot notation, however, it does not work. The script tries to find a property named randomVariable which doesn't exist:

orange.randomVariable // returns `undefined`
Practice using dot and bracket notation to access values:

### Exercise
