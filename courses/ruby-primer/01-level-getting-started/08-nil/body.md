<!-- { ids:[60], language:'Ruby', type:'workshop', order: 7, name:'Nil', description:'Learn the concept of nothingness in programming.' }-->

### Objectives

After this exercise you should be able to:

- State the concept of nil.
- Describe if an object is nil.

### Example

There's a special data type in Ruby known as `nil`. Nil is a representation of nothingness. Nil is important in programming because it helps programmers determine the validity of an operation. Review the following statement:


```ruby
puts "Bloc"[7]
```

We are using bracket notation to refer to a character in the string "Bloc". This – `[7]` tells Ruby to return the 8th character in the string.

> It's asking for the 8th, not the 7th, because counting in programming starts at `0`. For example, `"Bloc"[0] would return "B"`.

But there is no 8th character in the string "Bloc" – that particular string only has four characters. Since we are asking Ruby to return a value for which nothing exists, the result in `nil`.

`nil` is different than `0` or a blank string (`""`). `nil` represents nothingness.

### Exercise

1. Define a method named `am_i_nil?`.
2. The method should take two arguments: a string argument, and a number argument.
3. The method should return true if a character at the position of the second argument is non-existent. The method should return false if there is a character at the position of the second argument.

The completed method can be called like this:

```ruby
puts am_i_nil?("Ada Lovelace", 4)
=> false

puts am_i_nil?("Ada Lovelace", 35)
=> true
```

You can check if a value is nil by calling the `nil?` method on it. For example, "Bloc".nil? will return false, because "Bloc" is a valid string and hence not nil.

> Ruby allows special characters like `?` and `!` in method names. These characters don't mean anything special, they're just useful for naming methods and implying the method's intent. For example, using `?` in a method name that returns a boolean value is considered a best practice.
