<!-- { ids:[87], language:'Ruby', type:'workshop', order: 0, name:'Hash Definition', description:'Learn how to store and access key value data pairs with hashes.' }-->

### Objectives

After this exercise you should be able to:

- Identify a hash.
- Implement a hash.
- Explain the difference between a hash and an array.
- Explain the difference between a hash key and a hash value.
- Identify a symbol.

### Example

An array is a collection of objects stored as a list. A hash is a collection of objects stored as key / value pairs. While an element in an array is accessed through its index, a value in a hash is accessed through its key.

A key is a unique identifier, like an array element's index. But unlike an index, a key doesn't need to be an number – a key can be a string or symbol as well. Symbols are the most common types of hash key. Symbols are essentially lightweight strings, denoted with a `:` to the left of their name. To create a symbol named "book", we would write `:book`.

Let's write a dictionary program to demonstrate how to use symbols as keys. Our dictionary program will return the definition of a word that's passed to it:

```ruby
def get_definition(word)
  fruits = {:apple => "A red, yellow or green fruit.", :banana => "A yellow fruit.", :watermelon => "A large green fruit."}
  fruits[word]
end
```

Call the method:

```ruby
puts get_definition(:apple)
=> "A red, yellow or green fruit."
```

While a symbol is defined with a `:` to the left of it, Ruby provides a shorthand syntax for symbols which are used as hash keys. Here's our dictionary program with Ruby's shorthand hash key syntax for symbols:

```ruby
def get_definition(word)
  fruits = {apple: "A red, yellow or green fruit.", banana: "A yellow fruit.", watermelon: "A large green fruit."}
  fruits[word]
end
```

The `:` is placed on the right of the symbol, and we can remove the `=>`, which is known as a "hash rocket".

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
