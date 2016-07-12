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
