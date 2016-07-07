<!-- { ids:[57], language:'Ruby', type:'workshop', order: 3, name:'Strings', description:'Learn the string data type and apply it in a method.' }-->

### Objectives

After this exercise you should be able to:

- Define a string data type.
- Understand how to return a string from a method.
- Understand how to define a method which returns a string.
- Understand how to call a method on a string.
- Understand how to print a string.

### Example

A string is known as a **data type** in programming. Data types represent values and offer methods to return properties from their values. Strings are denoted by quotation marks:

```ruby
"I am a string, deal with it."
```

Because a string is a data type, we can assign it to a variable:

```ruby
my_first_string = "I am a string, deal with it."
```

The variable `my_first_string` now represents a string data type, and we can call methods on it:

```ruby
puts my_first_string.length
=> 28
```

We called the `length` method on the string, and it returned `28` because there are 28 characters in `"I am a string, deal with it."` Different methods return different values, `length` just happens to return a number representing the number of characters in a string. We can also call methods directly on strings, rather than their variables:

```ruby
puts "I am a string, deal with it.".length
=> 28
```

### Exercise

1. Define a method named `reverse_me`.
2. The method should take a string as an argument.
3. The method should return the string in reverse order.

The completed method can be called like this:

```ruby
puts reverse_me("Daenerys Targaryen")
=> "neyragraT syreneaD"
```

As a coder, a big part of your job is to read technical documentation, also known as APIs. The Ruby language – all of its data types and their methods – are documented. Even seasoned coders refer to documentation. To complete this exercise, view [Ruby's string methods](http://ruby-doc.org/core-2.2.0/String.html) and find one that will reverse a string. You can call this method inside of `reverse_me`. As a hint, Ruby methods are [very well-named](http://ruby-doc.org/core-2.2.0/String.html#method-i-reverse).
