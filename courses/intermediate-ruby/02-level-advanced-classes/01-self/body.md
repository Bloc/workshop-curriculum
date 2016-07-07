Turn our compounding interest calculator from the Math exercises in the Ruby Syntax chapter into an `InterestCalculator` class.

`InterestCalculator` should take four arguments on initialization:

- Principal
- Rate of interest
- Years compounded
- Times compounded per year

And it should define the following functions

- `amount` - A simple number representation, [rounded to 2 decimals](http://www.ruby-doc.org/core-2.1.2/Float.html#method-i-round).
- `statement` - A string of the format, "After 5 years I'll have 2000 dollars!"

Make sure to use `self` (implied or explicit) throughout the class. Instance variables should only be directly accessed in the `initialize` function, and amount should only be calculated in one place.

> Hint - to use instance `@` variables only in the `initialize` method, you'll need to use `attr_accessor`.

The compound interest formula:

```ruby
amount = principal * (1 + self.rate / self.times_compounded) ** (self.times_compounded * self.years)
```
