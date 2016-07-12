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
