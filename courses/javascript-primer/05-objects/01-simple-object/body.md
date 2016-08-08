<!--{ ids:[174], language:'JavaScript', type:'workshop', order: 0, name:'A Simple Object', description:'Objects store data and functions in one location' }-->

### Objectives

After this exercise, you should be able to:

- State what an object is

### Example

Data comes in a variety of forms, and so far we've learned that strings, numbers, and booleans are JavaScript's primary data types. Some data, however, is more complex and requires more structure. For this type of data, JavaScript has an __object__ data type.

Objects store data and functions in one location as a collection of __properties__ and __values__. A property (sometimes referred to as a _tag_ or _key_) names a location used to access a value. A value can be any type: string, number, boolean, `undefined`, `null`, or even another object.

JavaScript objects are like dictionaries. A dictionary is a set of data – a collection of words assigned definitions. You use a word to retrieve its definition; with an object, you use a property name to retrieve its value. Unlike a dictionary, however, in which words are ordered alphabetically, object properties are not need to be ordered in a particular way.

![an orange](https://upload.wikimedia.org/wikipedia/commons/f/f2/Citrus_reticulata.jpg)

Consider the object shown above. We know (or at the very least, assume) it's an orange because of certain properties it exhibits. For example, its color is orange and its shape is round:

| Property | Value  |
| -------- | ------ |
| color	   | orange |
| shape	   | round  |

JavaScript objects, like real-world objects, have properties which we use to access values.
