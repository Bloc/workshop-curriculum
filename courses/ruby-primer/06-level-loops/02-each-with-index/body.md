<!-- { ids:[85], language:'Ruby', type:'workshop', order: 1, name:'Each With Index', description:'Learn how to iterate over and modify an array while tracking its index position.' }-->

### Objectives

After this exercise you should be able to:

- Explain the purpose of tracking a loop.
- Explain how the `each_with_index` method is called.
- Apply the `each_with_index` method to modify an array.

### Example

In an `each` loop we can derive the _value_ of an element in the array being iterated over. But we can't easilt derive an element's _position_. Knowing the position of an element in a loop is often necessary, and Ruby provides a convenient method for this purpose. Let's take a look at the `each_with_index` method:

```ruby
#1
["Arya","Sansa","Lyanna"].each_with_index do |element, index|

#2
  puts "#{element} is at position #{index}"
end
```

- At **#1** we call the method on an array, and pass two arguments to the block. The first argument represents the element value, the second argument represents the element position, or index.
- At **#2** we print an interpolated string using both argument values.

This method would generate the following:

```ruby
"Arya is at position 0"
"Sansa is at position 1"
"Lyanna is at position 2"
```

### Exercise

1. Define a method named `multiply_the_odds`.
2. The method should take an array of numbers as an argument.
3. The method should return the product of all numbers with an odd index position.
4. The method should return `0` if passed an empty array.
5. The method should return `1` if passed a single element array.

The completed method can be called like this:

```ruby
puts multiply_the_odds([1,3,5,7,9,11])
# multiples 3 * 7 * 11
=> 231

puts multiply_the_odds([])
=> 0

puts multiply_the_odds([100])
=> 1
```
