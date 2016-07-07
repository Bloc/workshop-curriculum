<!-- { ids:[158], language:'Ruby', type:'workshop', order: 2, name:'Search with a Block Argument', description:'Learn how to use a block argument to search for elements in an array.' }-->

### Objectives

After this exercise you should be able to:

- Understand how to search for elements in an array.
- Use the `any` method on an array with a block argument.

### Example

There are numerous ways to search an object in Ruby. We can conduct complex searches with regular expressions (which we'll cover in a different course), or we can do a simple boolean search. In this exercise we'll start with  a basic boolean search using the `any?` method. This method returns `true` if a condition specified in its block argument is met in the array its called on. For example:

```ruby
array = [1,2,3]
array.any?{ |number| number > 5 }
=> false

array = [1,2,3]
array.any?{ |number| number > 2 }
=> true
```

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
