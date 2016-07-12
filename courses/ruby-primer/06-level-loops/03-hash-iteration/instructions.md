### Exercise

1. Define a method named `hash_to_array`.
2. The method should take a hash argument.
3. The method should return an array consisting of strings with the key and value interpolated. Each string in the array should be formatted as `"key is value"`.
4. The method should return a string that reads `"no pizza?"` if the hash argument is empty.

The completed method can be called like this:

```ruby
puts hash_to_array({ crust: "wheat", sauce: "spicy", cheese: "extra", topping: "pepperoni"})
=> ["crust is what", "sauce is spicy", "cheese is extra", "topping is pepperoni"]

puts hash_to_array({ })
=> "no pizza?"
```
