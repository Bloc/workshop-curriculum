### Exercise

1. Define a method named, `which_hand?`.
2. It takes two arguments: `left` and `right`
3. If `left` is `nil`, return `right`.
4. If `right` is `nil`, return `left`.
5. If both are `nil`, return the string, "You're cheating!"
6. If neither value is `nil`, return `nil`.

In use:

```ruby
puts which_hand?(1, nil)
#=> 1

puts which_hand?(nil, "stringy the string!")
#=> "stringy the string!"

puts which_hand?(nil, nil)
#=> "You're cheating!"

puts which_hand?("something", "another thing")
#=> nil
```
