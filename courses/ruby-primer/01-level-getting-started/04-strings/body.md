<!-- { ids:[57], language:'Ruby', type:'workshop', order: 3, name:'Strings', description:'Learn the string data type and apply it in a method.' }-->

### Objectives

After this exercise you should be able to:

- Define a string data type.
- Return a string from a method.
- Define a method which returns a string.
- Call a method on a string.
- Print a string.

### Example

A string is known as a **data type** in programming. Data types represent values and come with their own methods.

Strings are denoted by quotation marks:

```ruby
"I am a string, not the yarn kind."
```

Because a string is a data type, we can assign it to a variable:

```ruby
my_first_string = "I am a string, not the yarn kind."
```

The variable `my_first_string` now represents a string data type, and we can call methods on it:

```ruby
puts my_first_string.length
=> 33
```

We called the `length` method on the string, and it returned `33` because there are 33 characters in, "I am a string, not the yarn kind."

Different methods return different values, `length` just happens to return the number of characters in the string. We can also call methods directly on a data type, rather than its variable:

```ruby
puts "I am a string, not the yarn kind.".length
=> 33
```
