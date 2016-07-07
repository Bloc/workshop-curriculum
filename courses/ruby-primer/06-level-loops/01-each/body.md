<!-- { ids:[84], language:'Ruby', type:'workshop', order: 0, name:'Each', description:'Learn how iterate over an array.' }-->

### Objectives

After this exercise you should be able to:

- Explain the purpose of loops.
- Explain how the `each` method is called.
- Apply the `each` method to modify an array.

### Example

Computers are very good at doing what they're told. That's what a coder does – they articulate a set of instructions to a computer, and the computer executes those instructions. Computers are also very efficient at doing defined tasks repeatedly. Coders use loops to instruct computers to do a task more than once – this is also know as iteration. Loops perform actions on each object in the collection they're iterating over – this makes loops very powerful because we can perform a generic action many times with a small amount of code.

There are different ways to program loops in Ruby, but the most common is the `each` method:

```ruby
# 1
my_array = [2, 4, 6, 8]

#2
my_array.each do |num|

#3
  puts "We're on number: #{num}"
end
```

Here's what we did:

- At **#1** we create an array of numbers.
- At **#2** we call the `each` method on the array and pass it a **block** argument. (We'll learn about blocks in the next level.) In the block (denoted by `do`) we declare a variable named `num` to be used in the loop. This variable represents the element over which the `each` method will iterate.
- At **#3** inside of the loop we print an interpolated string with `num`. The `num` variable represents an element from the array. With each iteration, `num` is assigned to a new element. In this example, `num` is assigned to `2`, then `4`, then `6`, then `8`.

Let's look at another loop – one that returns a new value:

```ruby
def what_number_are_we_on?(my_array)

#1
  new_array = []
  my_array.each do |num|

#2  
    new_array << "We're on number: #{num}"
  end
#3  
  new_array
end
```

Here's what we did:

- At **#1** we create an empty array.
- At **#2** we shovel a string – with the block argument interpolated – onto the new array.
- At **#3** we return the new array _after_ the loop has finished.

When called, this method would return:

```ruby
puts what_number_are_we_on?([2, 4, 6, 8])
=> ["We're on number: 2", "We're on number: 4", "We're on number: 6", "We're on number: 8"]
```

### Exercise

1. Define a method named `sum_numbers`.
2. This method should take an array of numbers as an argument.
3. This method should return a number which equals the sum of all numbers in the argument array.
4. The method should return `0` if passed an empty array.

The completed method can be called like this:

```ruby
puts sum_numbers([7,7,7,21])
=> 42
```
