<!-- { ids:[156], language:'Ruby', type:'workshop', order: 0, name:'Sort with a Block Argument', description:'Learn how to use a block argument to sort an array.' }-->

### Objectives

After this exercise you should be able to:

- State the concept of a block.
- Understand using a block as an argument.
- Implement logic in a block.
- Use the `sort` method on an array with a block argument.

### Example

Some methods in Ruby take block arguments. A block accepts a specific set of instructions that will be run when its method is called. For example, the `each` method accepts a block argument:

```ruby
[2, 4, 6, 8].each do |num|
  puts "We're on number: #{num}"
end
```

The block starts with a `do` and accepts a variable in between its pipes `| |`. Alternatively, a block can be written with `{ }` if its code can be placed on a single line:

```ruby
[2, 4, 6, 8].each { |num| puts "We're on number: #{num}" }
```

The `each` method illustrates a simple use of a block argument. Let's review the `sort` method, which will allow us to specify logic in our block argument. The `sort` method takes a block as an argument and sorts the elements of the array it's called on, according to the logic in the block. Consider the following example using the `sort` method:

```ruby
letters = [ "d", "a", "e", "c", "b" ]

letters.sort { |x,y| y <=> x }
=> ["e", "d", "c", "b", "a"]
```

In the block passed to `sort`, we're using a "spaceship operator" (`<=>`) to determine the order of the elements. The spaceship operator returns `1`,`0` or `-1` based on the value of the left argument relative to the value of the right argument, and the `sort` method sorts the items accordingly. For example: `a <=> b` returns:

- `-1` if `a < b`
- `0` if `a == b`
- `1` if `a > b`

If we switch `x` and `y` in the sorting block, we reverse the sorting logic, and the items are sorted in the opposite direction:

```ruby
letters = [ "d", "a", "e", "c", "b" ]

letters.sort { |x,y| x <=> y }
=> ["a", "b", "c", "d", "e"]
```

If no block argument is passed to the `sort` method, a spaceship operator will be used by default, and Ruby will make an assumption about the sorting logic:

```ruby
letters.sort
#=> ["a", "b", "c", "d", "e"]

numbers = [2,3,1]
numbers.sort
#=> [1,2,3]
```

### Exercise

1. Define a method named `sort_by_length`.
2. The method should take an array of strings as an argument.
3. The method should return an array of strings sorted by their length value, from shortest length to longest length.

The completed method can be called like this:

```ruby
puts sort_by_length(["Arya", "Sansa", "Lyanna", "Jon"])
=> ["Jon", "Arya", "Sansa", "Lyanna"]
```
