<!-- { ids:[157], language:'Ruby', type:'workshop', order: 1, name:'Map with a Block Argument', description:'Learn how to use a block argument to map elements in an array.' }-->

### Objectives

After this exercise you should be able to:

- Understand how to map elements in an array.
- Use the `map` method on an array with a block argument.
- Describe mutative methods.

### Example

The `map` method is called on an array when the array's elements need to be changed. We use a block argument to determine the logic for which each element in the array must change.

Let's use the `map` method to iterate over an array of hash objects:

```ruby
deadly_viper_assassination_squad =
  [{ id: 1, name: 'Beatrix' },
  { id: 2, name: 'O-Ren' },
  { id: 3, name: 'Vernita' },
  { id: 4, name: 'Elle' }]

puts deadly_viper_assassination_squad.map { |f| f[:name] }
=> ["Beatrix", "O-Ren", "Vernita", "Elle"]
```

> The original `deadly_viper_assassination_squad` collection remains untouched; we just iterate through it to return a collection of names.

The `map` method changed the `deadly_viper_assassination_squad` array such that it now consists only of names. This change is only temporary though. Let's print the array again:

```ruby
puts deadly_viper_assassination_squad
=> [{ id: 1, name: 'Beatrix' }, { id: 2, name: 'O-Ren' }, { id: 3, name: 'Vernita' }, { id: 4, name: 'Elle' }]
```

The `map` method returned a modified array, but the array itself remained the same. The `map` method, and many other methods in Ruby offer a **mutative** option, where the method will not only return a new value, but will change the object it was called on. Mutative methods are denoted with "bang" operator (`!`), for example:

```ruby
# Note the ! after map.
puts deadly_viper_assassination_squad.map! { |f| f[:name] }
=> ["Beatrix", "O-Ren", "Vernita", "Elle"]

# When we print the original array, the returned value persists.
puts deadly_viper_assassination_squad
=> ["Beatrix", "O-Ren", "Vernita", "Elle"]
```

### Exercise

1. Define a method named `add_two`.
2. The method should take an array of numbers.
3. The method should return an array of numbers where each number has been incremented by two.

The completed method can be called like this:

```ruby
add_two([1,3])
=> [3, 5]
```
