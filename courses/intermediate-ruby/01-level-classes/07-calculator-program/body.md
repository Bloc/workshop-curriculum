<!-- { ids:[25], language:'Ruby', type:'workshop', name:'Calculator Class', description:'Create a class that can take values and calculate results.' }-->

Write a `Calculator` class that is initialized with two arguments (`x` and `y`) and performs basic math operations on them. Your class should have the following methods:

- A single class method, `description`, which returns the string "Performs basic mathematical operations".
- An `add` instance method which adds the two instance variables together.
- A `subtract` instance method which subtracts the second variable from the first.
- A `multiply` instance method which multiplies them together.
- A `divide` instance method which divides the first variable by the second.

> Ruby integer (aka `Fixnum`) division doesn't work like you might expect. Run `7 / 2` in the console. The result will be rounded to an integer, which isn't accurate enough for our `divide` method. We'll need to use Fixnum's [`to_f`](http://ruby-doc.org/core-2.1.5/Fixnum.html#method-i-to_f) method to get the division to return a [`Float`](http://www.ruby-doc.org/core-2.1.5/Float.html). Unlike `Fixnum`, `Float` can represent decimal numbers. Try running `7.to_f / 2` in the console to see how you can get a more accurate division result.

You should be able to use your class like so:

```ruby
Calculator.description
# => "Performs basic mathematical operations"

calc = Calculator.new(5, 2)
#=> #<Calculator:0x007fa843e25200 @x=5, @y=2>

calc.add
#=> 7

calc.divide
#=> 2.5
```

> The `@calc` variable is used in the tests below for this exercise. Ignoring the `before` and the curly braces for now, what do you think is going on? What kind of variable is `@calc`?
