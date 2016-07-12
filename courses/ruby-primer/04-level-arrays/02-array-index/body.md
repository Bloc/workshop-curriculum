<!-- { ids:[124], language:'Ruby', type:'workshop', order: 1, name:'Array Index', description:'Learn how to specify elements in an array using their index.' }-->

### Objectives

After this exercise you should be able to:

- Identify elements in an array using their index.

### Example

Elements of an array are accessed by specifying their index, but we won't always know what that index is. Sometimes, we'll need to calculate an index based on conditions and arguments. For example, what if we didn't know what the length of an array will be? Let's make up a simple game to demonstrate. In our game – "not quite last" – we will always return the third to last element of an array, regardless of its size.

```ruby
def not_quite_last(arr)
  arr[arr.length-3]
end
```

In the method implementation above, we performed operations within the index brackets. First we called the `length` method on our argument array, which returns the number of elements in an array. Next, we subtracted `3` from the length which results in the third to last element's index. For example:

```ruby
puts not_quite_last([1,2,3,4,5,6,7])
=> 5

# arr = [1,2,3,4,5,6,7]
# arr.length = 7
# arr[7 - 3] is the same as arr[4]
# arr[4] = 5
```

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
