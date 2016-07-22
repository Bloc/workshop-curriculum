### Exercise

In this exercise, we're going to discuss everyone's _favorite_ topic: taxes!

Consider the following tax brackets:

| Tax Bracket | Tax % |
| :-- | :-- |
| < 12k | 0% |
| 12k - 25k | 5% |
| 25k - 50k | 8% |
| 50k - 100k | 10.5% |
| 100k - 250k | 15% |
| > 250k | 19% |

1. Define a method named `calculate_taxes`.
2. The method should take one integer argument (income).
3. The method should use a case statement and return the amount of taxes the person owes based on the following formula:
  - `Tax Owed = Income * Tax %`

> Hint: You can use [numeric ranges](http://www.tutorialspoint.com/ruby/ruby_ranges.htm) in your case statements to handle a set of numbers, e.g. `5...10` includes 5, 6, 7, 8, and 9.

In use:

```ruby
puts calculate_taxes(10000)
=> 0

puts calculate_taxes(12000)
=> 600

puts calculate_taxes(75000)
=> 7875
```
