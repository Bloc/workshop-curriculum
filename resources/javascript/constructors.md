<!-- { ids:[1375], name:'JavaScript: Object Constructors', summary:'Object Constructors: the second of three ways to create an object' } -->

Read the [Introduction to Object-Oriented JavaScript](https://www.bloc.io/resources/introduction-to-object-oriented-javascript) resource. It introduces concepts required to understand this checkpoint.

In the Objects checkpoint, we learned that assigning curly braces to a variable creates a new object. The curly braces may be empty or have properties:

```js
var myObject = {};

var myOtherObject = {
  someProp1: "cool",
  someProp2: "rad",
  someProp3: "tubular"
};
```

An object created in this way is known as an __object literal__. We can create and define an object in one statement using object literals.

JavaScript also has a built-in `Object()` function which allows us to create an object using the `new` keyword:

```js
// without properties:
var myObject = new Object();

// with properties:
var myOtherObject = new Object({ someProp: "radical" });
```

## Construct an Object

Let's say we know a few people who are Bloc students (a friend, a neighbor, and a coworker) and we want to make note of their course and pace. Similar to the `new Object()` syntax shown above, we can construct objects based on a blueprint. This blueprint is known as an __object constructor__.

Conventionally, we capitalize the names of constructors to differentiate them from other functions. Let's create a `BlocStudent` function that will act as a blueprint to create other objects:

```js
function BlocStudent(name, program, pace) {
  this.name    = name;
  this.program = program;
  this.pace    = pace;
}
```

We'll discuss what `this` is/does in more detail in a later checkpoint, but for now, know that `this` will refer to an object created by the constructor. `this.name` in the constructor function becomes a `name` property on the constructed object.

Now that we have a blueprint by which we can create other objects, we'll create an object for each of the fellow Bloc students we know:

```js
var friend   = new BlocStudent("Tyler", "Frontend Fundamentals", "16 weeks");
var neighbor = new BlocStudent("Ralph", "Rails Fundamentals", "32 weeks");
var coworker = new BlocStudent("Sally", "iOS Development Fundamentals", "16 weeks");
```

For each object we create, we use the `new` keyword, followed by the constructor name. Because an object constructor is a function, we also include the arguments to pass into the function, if any. In the code above, we use the `BlocStudent()` function as an object constructor and construct three objects that are of the `BlocStudent` object type. The passed in arguments are assigned as values to the `name`, `program`, and `pace` properties, respectively:

```js
friend.name;      // prints "Tyler"
neighbor.program; // prints "Rails Fundamentals"
coworker.pace;    // prints "16 weeks"
```

Object constructors make code reusable, which is the heart of the DRY (Don't Repeat Yourself) principle. To get technical, a constructor is any function called with the `new` keyword in front of it. `new Object()`, then, is also a constructor, but the objects it constructs have no additional properties.

Even though the constructed form of an object offers more creation options than the literal form, the literal form is often preferred because it is simpler. We use the constructed form when we require the extra options it provides.

Create an object constructor and construct a few objects with it. Test that your constructor works by accessing properties on the objects you created.

## Own Properties

Let's create a new `BlocStudent` object named `you`:

```js
var you = new BlocStudent("Jane Doe", "Frontend Fundamentals", "32 weeks");

you.name;    // returns "Jane Doe"
you.program; // returns "Frontend Fundamentals"
you.pace;    // returns "32 weeks"
```

These properties exist directly on the `you` object and are known as __own properties__. We can test this with the `hasOwnProperty()` method, which returns `true` if an object has the specified property and `false` if it does not:

```js
you.hasOwnProperty("name");           // returns true
you.hasOwnProperty("hasOwnProperty"); // returns false
```

When we check to see if the object `you` has its own property named `hasOwnProperty`, we learn that it does not. From what we know about prototypes, this property must exist somewhere on `you`'s prototype chain. For the sake of brevity, we'll share that `you`'s prototype chain looks like this:

`you` &rarr; `BlocStudent.prototype` &rarr; `Object.prototype` &rarr; `null`

From this we presume that `hasOwnProperty` probably exists on the `Object.prototype` object, as it seems like it could be a built-in JavaScript utility, but let's check to be sure:

```js
Object.prototype.hasOwnProperty("hasOwnProperty"); // returns true
```

Experiment with the `hasOwnProperty()` method. What other properties or methods have you learned that are built in to JavaScript and what object has them as own properties?

We now know that the `you` object inherits the `hasOwnProperty()` method from `Object.prototype`.

## The Prototype of a Constructed Object

Let's address the `BlocStudent.prototype` object we see in the prototype chain:

`you` &rarr; `BlocStudent.prototype` &rarr; `Object.prototype` &rarr; `null`

When we declare the `BlocStudent` constructor, it is automatically given a property named `prototype` whose value is equal to an empty object `{}`. Each object we create with this constructor has a prototype equal to `BlocStudent.prototype`.

All functions, constructors included, automatically get a property named `prototype` at creation. This property, by default, holds an empty object that derives from `Object.prototype`. Each object created by a constructor will have this object as its prototype.

All "Bloc student" objects constructed by `new BlocStudent()` have access to the properties and methods of the `BlocStudent.prototype` object. For example, let's add a method to the `BlocStudent.prototype` object:

```js
BlocStudent.prototype.learn = function(what) {
  console.log("I'm learning " + what + "!");
};

you.learn("frontend development");   // prints "I'm learning frontend development!"
you.learn("full stack development"); // prints "I'm learning full stack development!"
```

The `you` object inherits the `learn` property from `BlocStudent.prototype`. That is, `learn` is not an own property of the `you` object:

```js
you.hasOwnProperty("learn"); // returns false
```

To call this method, the prototype chain is consulted, and the steps look like this:

1. Is there a `learn()` method directly on `you`? _No, check its prototype._
2. Is there a `learn()` method directly on `BlocStudent.prototype`? _Yes, execute the method._

Create an object constructor and construct an object with it. Add a property to the `prototype` property of the constructor function. Check to see if your constructed object inherits the property added to the function's `prototype` object.

## Override Inherited Properties

We can override an inherited property to make it an own property. For example:

```js
you.hasOwnProperty("learn"); // returns false

you.learn = function() {
  console.log("I'm learning JavaScript right now!");
};

you.learn(); // prints "I'm learning JavaScript right now!"

you.hasOwnProperty("learn"); // returns true
```

To call this method, the prototype chain is again consulted, and the steps now look like this:

1. Is there a `learn()` method directly on `you`? _Yes, execute the method._

When we add a property to an object, it is added as an own property, regardless of whether the property exists in the prototype or not. If a property of the same name _does_ exist in the prototype, then the object no longer inherits the prototype's version of the property. The prototype itself remains unaltered.

In the case of the `BlocStudent.prototype` object, the `learn()` method still exists in it, but the `you` object no longer inherits it because `you` has its own property of the same name.

## Recap

| **Concept** | **Description** |
| ----------- | --------------- |
| [Object-Oriented Programming](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript) | A programming paradigm based on the concept of "objects". |
| [Prototypes](http://www.w3schools.com/js/js_object_prototypes.asp) | All JavaScript objects inherit the properties and methods from their prototype. |
| [Inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) | An object has access to the properties and methods of any prototype in its chain. |
| [Object Constructors](https://developer.mozilla.org/en-US/docs/Glossary/Constructor) | An object constructor is a function called with the `new` keyword that creates a new object reference. |
| [Own Properties](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) | "Own properties" are properties that exist directly on an object. |
