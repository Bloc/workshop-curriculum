### The Tests Tab

Let's take a look at your Workshop code editor, which has two tabs:

- Editor tab: this is where you code a solution for a given exercise.
- Tests tab: this contains code that tests whether your solution does what the exercise intends.

Code in the tests tab runs your solution code and outputs the results. If your solution code does what the exercise intends, the tests will pass. If your solution code does not do what the exercise intends, the tests will fail. If you understand how to read test code, you can use it to drive your development. In the coding world, this is known as **test-driven development** and it's an important process for professional coders.

### Ensuring Your Code Behaves Properly

A function can run without error but not do what it was meant to. You have to test your code to ensure that it does what it intends to. For example, implement an incorrect `add` function by typing:

```js
function add(a, b) {
  return a - b;
}

add(5,4); // returns 1 instead of 9
```

The `add` function will return a valid number, but not the expected result. The name of the function is `add` which implies that its intention is to add numbers. But the function actually subtracts one argument from the other. Coders need to test their code to make sure that it does what it was meant to do.

One of the most popular testing frameworks in the JavaScript community – and Bloc's choice – is [Mocha](https://mochajs.org/).

### Mocha in a Nutshell

Mocha sets expectations for your code. If those expectations are met, the test will pass. If you have expectations stated before writing your code (as you do in Workshop exercises) you can use them to drive your coding.

Let's explore a function test and how it drives our code. For this example, consider the following function:

```js
function greet(firstName, lastName) {
  return "Hello " + firstName + " " + lastName + "!";
}
```

The `greet` function takes two arguments – a person's first and last name – and returns a personalized message. For example, calling `greet` with the arguments `("Norah", "Jones")` will return `"Hello Norah Jones!"`:

```js
greet("Norah", "Jones"); // returns "Hello Norah Jones!"
```

Mocha, like JavaScript, has a syntax. Let's write a test for our `greet` function:

```js
var greeting = greet("Meryl", "Streep");
expect(greeting).to.equal("Hello Meryl Streep!");
```

This test will "pass" or "fail" depending on whether the expectation for the function is met. Mocha syntax, however, is a _little_ bit more complicated than the above. Consider the following example:

```js
describe("greet", function() {
  it("says hello to someone", function() {
    var greeting = greet("Meryl", "Streep");
    expect(greeting).to.equal("Hello Meryl Streep!");
  });
});
```

While the actual test remains unchanged, we've now wrapped it in `describe` and `it` sections.

> The strings following `describe` and `it` are meant to be obvious and understandable. You can put whatever you want there — though it should accurately describe the function and its behavior. Changing the contents of those strings will _not_ change the test behavior.

We use `describe` to describe the function we're testing, and `it` to state the behavior we want to test.

Inside `describe` and `it`, we write our test. The test runs our `greet` function with two arguments and sets an expectation about what that function should return. We use Mocha's `expect`, `to`, and `equal` functions to state our expectation that the return value of calling `greet` with the arguments "Meryl" and "Streep" will equal "Hello Meryl Streep!" If that expectation is met, the test will pass. If not, it will fail.

To make this test pass, you would implement the `greet` function as it's written below:

```js
function greet(firstName, lastName) {
  return "Hello " + firstName + " " + lastName + "!";
}
```

### Test-Driven Development

When tests are written to testify future code's behavior, it's called "Test-Driven Development", or TDD. Read this test:

```js
describe("multiply", function() {
  it("multiplies two numbers together", function() {
    var product = multiply(5,3);
    expect(product).to.equal(15);
  });
});
```

> How would you write this `multiply` function to pass the above test? How many arguments would it take? What would it do with those arguments?

This test sets expectations about the `multiply` function. It states an expectation that calling `multiply` with the arguments `3` and `5` will return `15`. Let's take the easiest path towards fulfilling this test by writing the below function:

```js
function multiply(x, y) {
  return 15;
}
```

But something is wrong. We've ignored the arguments passed in, and instead "hardcoded" the value to be returned. This narrow implementation passes the above test, but will break the instant we test it with different values. If our test passes different numbers to the `multiply` function, as it does below, the above implementation will fail:

```ruby
describe("multiply", function() {
  it("multiplies two numbers together", function() {
    var product = multiply(4,3);
    expect(product).to.equal(12);
  });
});
```

To make our implementation more flexible, we'd modify our function:

```ruby
function multiply(x, y) {
  return x * y;
}
```

Our function now accounts for any two values to be multiplied, and will pass all the tests.

As you can see above, narrow implementations of functions can pass tests. Because of this, the tests in the coming exercises will test your code from a variety of angles. Read the tests after the exercise prompt and ensure that you understand what is expected of your code. Our tests will run your code with a variety of arguments, making sure it behaves as intended.
