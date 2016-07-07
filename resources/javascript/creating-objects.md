<!-- { ids:[1376], name:'JavaScript: Object.create()', summary:'Object.create(): create an object with a specific prototype' } -->

We've learned two ways to create an object: using literal notation and object constructors. We're going to add another to this list: `Object.create()`.

The `Object.create()` method creates an object with a specified prototype. The prototype chains of objects created by `Object.create()` are often more complex than the prototype chain examples we've seen so far.

Be wary of long prototype chains, however. Most often, we can break down long chains into shorter, more manageable ones. Even so, `Object.create()` has some advantages.

## `Object.create()`

We'll create a `protoStudent` object with a method named `praise`. We'll then create two objects, `badStudent` and `you`, that are based on `protoStudent`.

First, we create the `protoStudent` object:

```js
var protoStudent = {
  praise: function(workQuality){
    console.log("This student's effort is " + this.effort + ". They do " + workQuality + " work!");
  }
};
```

The prototype chain of `protoStudent` looks like this:

`protoStudent` &rarr; `Object.prototype` &rarr; `null`

Next, we create two objects with `Object.create()` and set the objects' prototypes to `protoStudent`:

```js
var badStudent = Object.create(protoStudent);
badStudent.effort = "subpar";
badStudent.praise("low quality");
// prints "This student's effort is subpar. They do low quality work!"

var you = Object.create(protoStudent);
you.effort = "above and beyond";
you.praise("excellent");
// prints "This student's effort is above and beyond. They do excellent work!"
```

The prototype chains of these two objects look like this:

`badStudent` &rarr; `protoStudent` &rarr; `Object.prototype` &rarr; `null`

`you` &rarr; `protoStudent` &rarr; `Object.prototype` &rarr; `null`

The `protoStudent` object contains properties whose values are shared by all the "student" objects. An individual "student," like `you`, however, may have properties that apply only to itself, such as `effort`.

Practice using `Object.create()` to create an object with a specified prototype.

## `Object.create()` Continued

Let's create another object and set _that_ object's prototype to `you`:

```js
var futureStudent = Object.create(you);
futureStudent.praise("stellar");
// prints "This student's effort is above and beyond. They do stellar work!"
```

In this example, we've assigned `you` as the prototype of the `futureStudent` object. The `you` object has its own property `effort`, therefore, the `futureStudent` object inherits that property.

Let's take a took at `futureStudent`'s prototype chain:

`futureStudent` &rarr; `you` &rarr; `protoStudent` &rarr; `Object.prototype` &rarr; `null`

We can validate the chain above with the follow checks (each line returns `true`):

```js
Object.getPrototypeOf(futureStudent) == you;
Object.getPrototypeOf(you) == protoStudent;
Object.getPrototypeOf(protoStudent) == Object.prototype;
Object.getPrototypeOf(Object.prototype) == null;
```

`futureStudent` inherits from `you` which inherits from `protoStudent` and so on. We start to see how it's possible for objects created with `Object.create()` to have complex prototype chains.

## Objects Without Prototypes

As we know, `Object.create()` creates an object with a specified prototype. It's possible, then, to set a prototype to `null` and create a prototype-less object:

```js
var parentless = Object.create(null);
```

The prototype chain of the `parentless` object looks like this:

`parentless` &rarr; `null`

Objects with this prototype chain are not common, but are often called "dictionaries" and used purely for storing data. An object that does not derive from `Object.prototype`, as nearly all objects do, loses access to the various built-in JavaScript object utilities. By definition, data dictionaries require that all of their properties be owned.

```js
var parentless = Object.create(null);

parentless.ownProp = "I'm an own property!";
Object.getPrototypeOf(parentless) == null; // returns true
parentless.hasOwnProperty("ownProp");      /* throws a TypeError because `parentless`
                                            * does not have access to the `hasOwnProperty()`
                                            * method that exists on `Object.prototype` */
```

Practice creating a "dictionary" by creating an object without a prototype.

## Different Prototype Chains

Let's review the different ways we can create objects and their resulting prototype chains.

### Objects Created with Literal Notation

We use object literals when we do not require the benefits of a constructor or the `Object.create()` method.

Objects:

```js
var someObject = {someProp: "cool"};
```

`someObject` &rarr; `Object.prototype` &rarr; `null`

Arrays:

```js
var someArray = ["some", "cool", "elements"];
```

`someArray` &rarr; `Array.prototype` &rarr; `Object.prototype` &rarr; `null`

Functions:

```js
var someFunction = function() {return "cool!";};
```

`someFunction` &rarr; `Function.prototype` &rarr; `Object.prototype` &rarr; `null`

### Objects Created with Object Constructors

Use an object constructor when you need each instance of an object type to inherit the same prototype.

```js
var myObject = new Object();
```
`myObject` &rarr; `Object.prototype` &rarr; `null`

Remember that at creation, all functions get a `prototype` property. This property will be the prototype for all objects created by a constructor.

In the example above, the `Object` function gets a `prototype` property (`Object.prototype`), which becomes the prototype of `myObject`. In the example below, the `BlocStudent` function gets a `prototype` property (`BlocStudent.prototype`), which becomes the prototype of `you`.

```js
function BlocStudent(name, program, pace) {
  this.name    = name;
  this.program = program;
  this.pace    = pace;
}
```

`BlocStudent` &rarr; `Function.prototype` &rarr; `Object.prototype` &rarr; `null`

```js
var you = new BlocStudent("Jane Doe", "Frontend", "36 weeks");
```

`you` &rarr; `BlocStudent.prototype` &rarr; `Object.prototype` &rarr; `null`

### Objects Created with `Object.create()`

Use `Object.create()` to set a specific prototype chain for an object.

```js
var protoStudent = {school: "Bloc"};
```

`protoStudent` &rarr; `Object.prototype` &rarr; `null`

```js
var you = Object.create(protoStudent);
```

`you` &rarr; `protoStudent` &rarr; `Object.prototype` &rarr; `null`

```js
var futureStudent = Object.create(you);
```

`futureStudent` &rarr; `you` &rarr; `protoStudent` &rarr; `Object.prototype` &rarr; `null`

```js
var parentless = Object.create(null);
```

`parentless` &rarr; `null`

## Recap

| **Concept** | **Description** |
| ----------- | --------------- |
| [`Object.create()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create) | `Object.create()` creates an object with a specified prototype. |
| [Prototype Chains](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) | Every object is linked to its prototype and is part of a prototype chain. |
| Dictionaries | Dictionaries are objects that do not have a prototype, and therefore they do not have access to JavaScript utilities. |
