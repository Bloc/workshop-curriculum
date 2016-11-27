<!-- { ids:[123], language:'Ruby', type:'workshop', order: 4, name:'String Interpolation', description:'Learn how to insert variables into a string.' }-->

### Objectives

After this exercise you should be able to:

- Insert variables into a string.

### Example

String interpolation takes the data stored in variables and inserts it into a string. This makes it easy to create custom strings with your data. Let's demonstrate by writing a simple program that welcomes visitors to a new country:

```ruby
def welcome_to(country)
  "Welcome to #{country}, enjoy your stay!"
end
```

Strings will interpolate the statements in curly braces – `#{ }`. When used with a variable, the string will include the value of the variable as part of the string. If we call `welcome_to` with "Japan," this returns:

```ruby
puts welcome_to("Japan")
=> "Welcome to Japan, enjoy your stay!"
```

And interpolated statements are not limited to strings; we can interpolate all kinds of data. Here's a glimpse at how we interpolate numbers:

```ruby
def add_numbers(number1, number2)
  "The sum of #{number1} and #{number2} is #{number1 + number2}."
end
```

When we pass two numbers to this method, the string interpolates our numbers and their sum (`#{number1 + number2}`):

```ruby
puts add_numbers(2, 5)
=> "The sum of 2 and 5 is 7."
```
