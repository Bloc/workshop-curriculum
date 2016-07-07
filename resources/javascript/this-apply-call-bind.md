<!-- { ids:[1377], name:'JavaScript: this, apply(), call(), bind()', summary:"JavaScript's this: the value of 'this' depends on context" } -->

Using `this` is very important in JavaScript programming; it's time we explain it.

## What is `this`?

The use of "this" in the English language is similar to the use of `this` in JavaScript in that they are both used as shortcuts. They both refer to a thing (or in the case of English, perhaps an idea) that is the subject in the current context. We use "this" in English and `this` in JavaScript so that we don't have to explicitly restate the subject every time we want to reference it.

> Note: In this checkpoint, `this` refers to JavaScript, "this" refers to the English pronoun, and every other instance of _this_ is used as natural English.

Consider:

> I really love living in San Francisco. San Francisco is the best city on Earth.

Now consider:

> I really love living in San Francisco. This is the best city on Earth.

By using "this" in the second sentence, we retain the same meaning as the first example, but we don't have to repeat the use of "San Francisco." The option to use pronouns in English is very useful, but it can lead to ambiguity.

## Context

Let's read a short story in which a Bloc student goes on vacation and visits three cities. During her vacation she continues to meet with her mentor - what dedication!. She does not, however, tell her mentor what cities she will visit.

### A Tale of Three Cities

_While visiting the first city, the student has a phenomenal time. The student meets her mentor online and says, "Wow! What a great city. This is the best city on Earth!" The mentor, however, does not know where the student is and therefore does not know what city to which "this" refers._

_The student travels to the next city and again has a fantastic time. She tells her mentor, "I've never been anywhere so beautiful. This is the best city on Earth!" Once again, the mentor does not know what city to which "this" refers._

_Finally, the student travels to the last city of her vacation. "The people here are so kind. This is the best city on Earth," she tells her mentor. Once again, the mentor does not know which city "this" is._

_The mentor grows incredulous of the student's city rating-system. What are the odds that each subsequent city is truly the greatest city on Earth?_

The problem here is __context__, which plays an important role in the English language. Context is equally important for understanding `this` in JavaScript.

In the story above, the meaning of "this" depends on the city in which the student is located. To use programming terminology, the student __invokes__ the phrase "This is the best city on Earth" in three different cities, whereby "this" is __bound__ (attached) to a different city each time.

If we were to translate this story to JavaScript, it might look like this:

```js
function City() {
  this.studentPhrase = function() {
    console.log(this + " is the best city on Earth.");
  };
}

var firstCity = new City();
firstCity.studentPhrase();  // prints "[object Object] is the best city on Earth."

var secondCity = new City();
secondCity.studentPhrase(); // prints "[object Object] is the best city on Earth."

var lastCity = new City();
lastCity.studentPhrase();   // prints "[object Object] is the best city on Earth."
```

> All functions in JavaScript are objects, so they have properties. A function gets a `this` property __at the moment of invocation__. When an object invokes a function that uses `this`, `this` is bound to the invoking object.

To simulate the story, we create three "cities" to represent each of the cities the student visits. On each new "city" we invoke the `studentPhrase()` method, and we receive the same message three times. The student provides no context for "this." We only know that "this" refers to a different city each time: `firstCity`, `secondCity`, and `lastCity` in our JavaScript. Each time we invoke the `new City()` constructor to create a new object, the `this` we see in the constructor function will refer to that new object.

In each of these instances, we see JavaScript understands `this` to be `[object Object]`, which is JavaScript's way of telling us `this` = an object. Similarly, we know that in English "this" will always refer to an object of some kind. We know that each instance of `this` in our JavaScript translation is bound to one of the "cities" that we create, but we still don't know the names of the cities and have no way of accessing that information.

Let's say the student, having read the checkpoint about `this` and by doing so, tears a hole in the fabric of spacetime, decides to tell her mentor which cities she plans to visit. We learn that she intends to visit Paris, Cairo, and Tokyo. We now have context and can figure out the value of each instance of "this" in the story.

If we were to translate the story again with this new information, the JavaScript might look like this:

```js
function City(name) {
  this.name = name;
  this.studentPhrase = function() {
    console.log(this.name + " is the best city on Earth.");
  };
}

var firstCity = new City("Paris");
firstCity.studentPhrase();  // prints "Paris is the best city on Earth."

var secondCity = new City("Cairo");
secondCity.studentPhrase(); // prints "Cairo is the best city on Earth."

var lastCity = new City("Tokyo");
lastCity.studentPhrase();   // prints "Tokyo is the best city on Earth."
```

We add a parameter to the `City()` function dubbed `name`. We also add a new property that matches the parameter, `name`, that is assigned the value passed through the `new City()` constructor at the time of invocation. Once `new City()` is invoked and creates a new object, `this` is bound to that new object. The `name` property we add to `this` will be added to a "city" upon creation. The same holds true for the `studentPhrase` property.

In the story, "this" refers to the name of the city the student is in, and the value of "this" changes each time she goes to a new city. Similarly, in our JavaScript translation, the value of `this` changes each time we construct a new object.

Practice using `this` in a function by running the example code presented above.

## Other Contexts and the Binding of `this`

The example above bound `this` in a function context, specifically a function call as a constructor call. We'll now explore some of the contexts that result in different bindings of `this`.

### The Global Context

In the global execution context, `this` is bound to the global object. When executing JavaScript in a web browser, the `window` object is equal to the global object:

```js
this === window; // returns true
```

Execution context is the environment where a function is executed. We'll focus on two contexts in particular: global and function. Every function creates a new function execution context.

```js
this.butter = "is delicious!";
console.log(window.butter);   // prints "is delicious!"

var pizza = "is just okay";
console.log(window.pizza);    // prints "is just okay"
```

In the example above, `console.log()` is executed in the global context, so `this` is bound to the global object. If, however, we had executed `console.log()` within a function context, the value of `this` would depend on how the function is called.

### Simple Function Calls

When the value of `this` is not determined by the function call, its value defaults to the global object, which is the `window` object in web browsers:

```js
function doSomething() {
  return this;
}

doSomething() === window; // returns true
```

### Function Calls as a Method

When a function is called as a method of an object, `this` is bound to the object the method is called on:

```js
var ninjaTurtle = {
  name: "Michaelangelo",
  printName: function() {
    console.log(this.name);
  }
};

ninjaTurtle.printName(); // prints "Michaelangelo"

ninjaTurtle.master = {
  name: "Splinter",
  printName: function() {
    console.log(this.name);
  }
};

ninjaTurtle.master.printName(); // prints "Splinter"
```

### Function Calls as Constructor Calls

Any function called with the `new` keyword is considered a constructor (e.g. `new City()`). A constructor's `this` is bound to the newly created object (e.g. `var firstCity = new City()`).

```js
function City(name) {
  this.name = name;
}

var myCity = new City("San Francisco");
myCity.name; // returns "San Francisco"
```

However, if the constructor returns an object, then `this` is bound to that returned object:

```js
function City(name) {
  this.name = name;
  return { name: "surprise!" };
}

var myCity = new City("San Francisco");
myCity.name; // returns "surprise!"
```

Practice using `this` in the various types of function calls.

## `call()` and `apply()`

`call()` and `apply()` are methods that all functions inherit through their prototype chains from `Function.prototype`. These methods allow us to bind a function's `this` to a specific object.

The first parameter of both `call()` and `apply()` is the specified object to bind to `this`:

```js
function sayHello() {
  console.log("Hello " + this.friend1 + " & " + this.friend2);
}

var friends = {
  friend1: "Annie",
  friend2: "Abed"
};

sayHello.call(friends);  // prints "Hello Annie & Abed"
sayHello.apply(friends); // prints "Hello Annie & Abed"
```

On the `sayHello()` function, we use `call()` and `apply()` to specify the `friends` object as the object to which `this` is bound.

In addition to binding `this` to a specified object, `call()` and `apply()` have optional parameters that are passed as arguments in the function call. The only difference between these two methods is the way that these optional parameters are structured.

`call()` takes individually provided arguments and `apply()` takes an array of arguments:

```js
function sayHello(friend3, friend4) {
  console.log("Hello " + this.friend1 + ", " + this.friend2 + ", " + friend3 + ", " + friend4);
}

var friends = {
  friend1: "Annie",
  friend2: "Abed"
};

sayHello.call(friends, "Troy", "Britta");    // prints "Hello Annie, Abed, Troy, Britta"

var moreFriends = ["Troy", "Britta"];

sayHello.apply(friends, moreFriends);        // prints "Hello Annie, Abed, Troy, Britta"
sayHello.apply(friends, ["Troy", "Britta"]); // prints "Hello Annie, Abed, Troy, Britta"
```

In the example above, we bind the `this` of the `sayHello()` function to the `friends` object using both methods. Note that the `sayHello()` function now has two parameters: `friend3` and `friend4`.

When we use the `call()` method and include additional individual arguments `"Troy"` and `"Britta"`, those arguments are passed into the function as `friend3` and `friend4`, respectively. The same is true for the `apply()` method, but the arguments are provided as elements in an array.

If we attempt to pass too few arguments, then the function is unable to access information it requires and `undefined` takes the place of the missing argument(s):

```js
function sayHello(friend3, friend4) {
  console.log("Hello " + this.friend1 + ", " + this.friend2 + ", " + friend3 + ", " + friend4);
}

var friends = {
  friend1: "Annie",
  friend2: "Abed"
};

sayHello.call(friends);              // prints "Hello Annie, Abed, undefined, undefined"
sayHello.call(friends, "Troy");      // prints "Hello Annie, Abed, Troy, undefined"

sayHello.apply(friends);             // prints "Hello Annie, Abed, undefined, undefined"
sayHello.apply(friends, ["Britta"]); // prints "Hello Annie, Abed, Britta, undefined"
```

The `apply()` method is slightly more versatile than the `call()` method because it takes an array as an argument. An array can be populated by other means (such as a loop) and used as a single argument whereas the `call()` method requires us to supply arguments individually. Therefore, `call()` limits developers by demanding they know the function definition ahead of time.

Practice using `call()` and `apply()` to specify an object to which `this` should be bound.

## `bind()`

`bind()` is a method that creates a new function with the same body as the function it is called on, but the `this` of the new function is permanently bound to a specified object.

_Meet Sully. He works at a company called Monsters, Inc._

_While at work, Sully has one job (to scare) and one target to scare (children)._

```js
var sullyAtWork = {
  target: "children",
  scare: function() {
    console.log("Scare: " + this.target);
  }
};

sullyAtWork.scare(); // prints "Scare: children"
```

`scare()` is a method that is called directly on the `sullyAtWork` object, so its `this` is bound to `sullyAtWork`.

_Outside of work, Sully targets no one. He has no job outside of work, but we give him something to do while at home._

```js
var target = "no one";
var sullyAtHome = sullyAtWork.scare;

sullyAtHome(); // prints "Scare: no one"
```

We create a variable named `sullyAtHome` and assign it the value of the `sullyAtWork.scare` function. `sullyAtHome()` performs the same action as `sullyAtWork.scare()`, but it is invoked by the global object. `sullyAtHome()`'s `this` is bound to the global object, where `target` has a value of `"no one"`.

_Sully can now scare while at home, but he doesn't have anyone to scare. We can make Sully's work job and its specifics available to him outside of work._

```js
var job = sullyAtHome.bind(sullyAtWork);

job(); // prints "Scare: children"
```

We use the `bind()` method to bind the `this` of `sullyAtHome` to the `sullyAtWork` object. We assign the value of that bound function to the `job` variable. We invoke `job()` in the global context, but its `this` is bound to the `sullyAtWork` object.

The difference between `sullyAtWork.scare()` and `job()` is that the `scare()` method must be called on the `sullyAtWork` object. `job()`, however, can be invoked outside of the `sullyAtWork` object and get the same result.

Also, similar to `apply()` and `call()`, `bind()` can take additional arguments to pass to the new function:

```js
var sullyAtWork = {
  target: "children",
  scare: function(otherTarget) {
    console.log("Scare: " + this.target + " or " + otherTarget);
  }
};

var target = "no one";

var sullyAtHome = sullyAtWork.scare;
sullyAtHome("Bloc students"); // prints "Scare: no one or Bloc students"

var newJob = sullyAtHome.bind(sullyAtWork, "Bloc mentors");
newJob();                     // prints "Scare: children or Bloc mentors"
```

`bind()` is different from `apply()` and `call()`, however, in that it permanently binds a function's `this` value to an object:

```js
var sullyAtWork = {
  target: "children",
  scare: function() {
    console.log("Scare: " + this.target);
  }
};

var target = "no one";

var sullyAtHome = sullyAtWork.scare;
sullyAtHome(); // prints "Scare: no one"

var job = sullyAtHome.bind(sullyAtWork);
job();         // prints "Scare: children"

var newJob = job.bind(window);
newJob();      // prints "Scare: children"
```

We attempt to bind `job`'s `this` to the `window` object. We expect `newJob()` to print `"Scare: no one"`, but it doesn't because `job`'s `this` is permanently bound to the `sullyAtWork` object.

Go back through the `bind()` section and run the Sully example in the console.

## Recap

| **Concept** | **Description** |
| ----------- | --------------- |
| [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) | Refers to the object in the current context. |
| Context | Global context as well as various function contexts determine the value of `this`. |
| [`apply()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) | Calls a function with a given `this` value and arguments provided as an array. |
| [`call()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call) | Calls a function with a given `this` value and arguments provided individually. |
| [`bind()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) | Creates a new function that, when called, has its `this` keyword set to the provided value. |
