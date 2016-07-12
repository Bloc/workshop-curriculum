### The Tests Tab

Test code is a type of code that tests other code. Wait, what?!? That statement may be confusing at first, but you'll understand after reading this resource. Let's take a look at your Workshop code editor, which has two tabs:

- Editor tab: this is where you code a solution for a given exercise.
- Tests tab: this contains test code that tests whether your solution does what the exercise intends.

Test code runs your solution code, and outputs the results. If your solution code does what the exercise intends, the tests will pass. If your solution code does not do what the exercise intends, the tests will fail. If you understand how to read test code, you can use it to drive your development. In the coding world, this is known as **test-driven development** and it's an important process for professional coders.

### Ensuring Your Code Behaves Properly

A method can return an object without error but not do what it was meant to. You have to test your code to ensure that it does what it intends to. For example, implement an incorrect `add` method by typing:

```ruby
def add(a,b)
  a-b
end

puts add(5,4)
```

The `add` method will return a valid number, but not the expected result. The name of the method is `add` which implies that its intention is to add numbers. But the method subtracts one argument from the other. Coders need to test their code to make sure that it does what it was meant to do.

One of the most popular testing frameworks in the Ruby community – and Bloc's choice – is [RSpec](http://rspec.info/).


### RSpec in a Nutshell

RSpec sets expectations for your code. If those expectations are met, the test will pass. If you have expectations stated before writing your code (as you do in Workshop exercises) you can use them to drive your coding.

Let's explore a method test and how it drives our code. For this example, consider the following method:

```ruby
def greet(first_name, last_name)
  "Hello #{first_name} #{last_name}!"
end
```

The `greet` method takes two arguments – a person's first and last name – and returns a personalized message. For example, calling `greet` with the arguments `("Norah", "Jones")` will return `"Hello Norah Jones!"`:

```ruby
puts greet("Norah", "Jones")
=> "Hello Norah Jones!"
```

RSpec, like Ruby, has a syntax. It feels a lot like Ruby, because it's written in Ruby! Let's write a test for our `greet` method:

```ruby
greeting = greet("Meryl", "Streep")
expect(greeting).to eql("Hello Meryl Streep!")
```

This test will "pass" or "fail" depending on whether the expectation for the method is met. RSpec syntax, however, is a _little_ bit more complicated than the above. Consider the following example:

```ruby
describe "greet" do
  it "says hello to someone" do
    greeting = greet("Meryl", "Streep")
    expect(greeting).to eql("Hello Meryl Streep!")
  end
end
```

While the actual test remains unchanged, we've now wrapped it in `describe` and `it` sections.

> The strings following `describe` and `it` are meant to be obvious and understandable. You can put whatever you want there — though it should accurately describe the method and its behavior. Changing the contents of those strings will _not_ change the test behavior.

We use `describe` to describe the method we're testing, and `it` to state the behavior we want to test.

Inside `describe` and `it`, we write our test. The test runs our `greet` method with two arguments and sets an expectation about what that method should return. Specifically, we use RSpec's `expect`, `to`, and `eql` methods to state our expectation that the return value of calling `greet` with the arguments "Meryl" and "Streep" will equal "Hello Meryl Streep!" If that expectation is met, the test will pass. If not, it will fail.

To make this test pass, you would implement the `greet` method as it's written below:

```ruby
def greet(first_name, last_name)
  "Hello #{first_name} #{last_name}!"
end
```

### Test-Driven Development

When tests are written to specify future code's behavior, it's called "Test-Driven Development", or TDD. Read this test:

```ruby
describe "multiply" do
  it "multiplies its two arguments" do
    product = multiply(5, 3)
    expect(product).to eql(15)
  end
end
```

> How would you write this `multiply` method to pass the above test? How many arguments would it take? What would it do with those arguments?

This test sets expectations about the `multiply` method. Specifically, it states an expectation that calling `multiply` with the arguments `3` and `5` will return `15`. Let's take the easiest path towards fulfilling this test by writing the below method:

```ruby
def multiply(x, y)
  15
end
```

But something is wrong. We've ignored the arguments passed in, and instead "hardcoded" the value to be returned. This narrow implementation passes the above test, but will break the instant we test it with different values. If our test passes different numbers to the `multiply` method, as it does below, the above implementation will fail:

```ruby
describe "multiply" do
  it "multiplies its two arguments" do
    product = multiply(4, 3)
    expect(product).to eql(12)
  end
end
```

To make our implementation more flexible, we'd modify our method:

```ruby
def multiply(x, y)
  x * y
end
```

Our method now accounts for any two values to be multiplied, and will pass all the tests.

As you can see above, narrow implementations of methods can pass specific tests. Because of this, the tests in the coming exercises will test your code from a variety of angles. Read the tests after the exercise prompt and ensure that you understand what is expected of your code. Our tests will run your code with a variety of arguments, making sure it behaves as intended.
