### Exercise

1. Define a method named `any_strings_or_numbers`.
2. The method should take an array as an argument.
3. The method should return `true` if the array has a string or number value in it, and should return `false` if it does not.

The completed method can be called like this:

```ruby
a = [ 1, 2, 3, "string" ]
any_strings_or_numbers?(a)
=> true

b = [ "no numbers" ]
any_strings_or_numbers?(b)
=> true

c = [ :i_am_a_symbol ]
any_strings_or_numbers?(c)
=> false

d = [ ]
any_strings_or_numbers?(d)
#=> false
```

You can use the `is_a?` method to check if an object is of a certain type. For example:

```ruby
"I am a string".is_a?(String)
=> true
```
