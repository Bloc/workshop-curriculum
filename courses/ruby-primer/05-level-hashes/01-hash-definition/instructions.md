### Exercise

For this exercise, we'll provide you with a dictionary of first names (keys) and last names (values):

```ruby
{ arya: "Stark", sansa: "Stark", cersei: "Lannister", jaime: "Lannister" }
```

1. Define a method named `houses_of_westeros`.
2. The method should take an argument which represents a first name.
3. The method should return a string that reads `"A member of House Stark."` where `"Stark"` is derived from the key value passed to the method.

The completed method can be called like this:

```ruby
puts houses_of_westeros(:arya)
=> "A member of House Stark."

puts houses_of_westeros(:cersei)
=> "A member of House Lannister."
```
