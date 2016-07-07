<!-- { ids:[56], language:'Ruby', type:'workshop', order: 2, name:'Method Arguments', description:'Learn what an argument is, how to name it, and how to use it in a method.' }-->

### Objectives

After this exercise you should be able to:

- Define what an argument is.
- Understand how to use an argument in a method.

### Example

You can interact with methods by providing them with information. Consider these two terms:

- Argument: A variable provided to a method.
- Pass: The act of providing a variable to a method.

There are two arguments passed to the `add` method below. The arguments are named `a` and `b`:

```ruby
def add(a,b)
  a + b
end
```

Arguments are variables that can be used within the method. In the `add` method above, we calculate the sum of the `a` and `b` values. A method can have any number of arguments, or no arguments at all.

We can call the `add` method with different arguments:

```ruby
puts add(1,2)
=> 3

puts add(4,5)
=> 9

puts add(7,7)
=> 14
```

### Exercise

1. Define a method named `hours_to_minutes`.
2. The method should take an argument named `hours`.
3. Calculate and return the number of minutes in the given `hours`.

To complete this exercise you'll need to use a mathematical operator. The most common mathematical operators in Ruby are:

- Addition: Uses the `+` sign.
- Subtraction: Uses the `-` sign.
- Multiplication: Uses the `*` sign.
- Division: Uses the `/` sign.
