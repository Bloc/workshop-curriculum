<!-- { ids:[152], language:'Ruby', type:'workshop', order: 2, name:'Hash Iteration', description:'Learn how to iterate over a hash object.' }-->

### Objectives

After this exercise you should be able to:

- Demonstrate the iteration over a hash using the each method.
- Recognize a key and a value while iterating over a hash.

### Example

Like an array, a hash is a collection of objects. Also like an array, we can iterate over a hash. Let's take a look at hash iteration:

```ruby
my_coffee_order = { size: "grande", milk: "coconut", espresso_shots: 2, price: "$5.00" }

my_coffee_order.each do |key, value|
  puts "#{key} is #{value}"
end
```

This would result in the following:

```ruby
"size is grande"
"milk is coconut"
"espresso_shots is 2"
"price is $5.00"
```

A hash loop must account for keys and values, which is why we pass them both as arguments to our `each` block.
