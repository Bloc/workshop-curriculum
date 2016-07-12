<!-- { ids:[123], language:'Ruby', type:'workshop', order: 4, name:'String Interpolation', description:'Learn how to insert variables into a string.' }-->

### Objectives

After this exercise you should be able to:

- Understand how to insert variables in a string.

### Example

String interpolation is the act of inserting variables into a string. This is useful for sending customized messages to a user of your program. Let's write a simple program that can be used to welcome visitors to a new country:

```ruby
def welcome_to(country)
  "Welcome to #{country}, enjoy your stay!"
end
```

This syntax – `#{ }` denotes the variable to be interpolated. When used in a string, it will print the variable provided as part of the string. When called, this would return:

```ruby
puts welcome_to("Japan")
=> "Welcome to Japan, enjoy your stay!"
```

One of the great thing about interpolated variables is that they're not limited to strings. We'll cover numbers later, but here's a glimpse of how we can interpolate numbers in a string:

```ruby
def add_numbers(number1, number2)
  "The sum of #{number1} and #{number2} is #{number1 + number2}."
end
```

When we pass two numbers to this method, our numbers will be interpolated as strings, as will the sum operation (`#{number1 + number2}`):

```ruby
puts add_numbers(2,5)
=> "The sum of 2 and 5 is 7."
```
