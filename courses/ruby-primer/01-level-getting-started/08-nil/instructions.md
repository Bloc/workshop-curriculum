### Exercise

- Define a method named, `which_hand?`.
- It takes two arguments: `left` and `right`
- If `left` is `nil`, return `right`.
- If `right` is `nil`, return `left`.
- If both are `nil`, return the string, "You're cheating!"
- If neither value is `nil`, return `nil`.

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
