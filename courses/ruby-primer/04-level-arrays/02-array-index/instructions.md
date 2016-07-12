### Exercise

1. Define a method named `odd_or_even_array`.
2. The method should take one argument – an array.
3. If the array length is equal to 1 the method should return an array which is the same array as the argument.
3. If the array length is odd the method should return an array consisting of the first, middle, and last elements in the argument array.
4. If the array length is even the method should return the first and last elements in the argument array.

The completed method can be called like this:

```ruby
puts odd_or_even_array([9])
=> [9]

puts odd_or_even_array([1,2,3,4,5,6,7])
=> [1,4,7]

puts odd_or_even_array("Ruby", "Python", "JavaScript", "C++", "Clojure", "Haskell")
=> ["Ruby", "Haskell"]
```
