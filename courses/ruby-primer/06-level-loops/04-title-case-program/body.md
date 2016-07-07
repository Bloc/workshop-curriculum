<!-- { ids:[86], language:'Ruby', type:'workshop', order: 3, name:'Title Case', description:'Create a method which returns a properly title-cased string, given a string in any format.' }-->

### Objectives

After this exercise you should be able to:

- Implement a method that takes a string and returns a properly title-cased version of the string.

### Exercise

1. Define a method named `fix_title`.
2. The method should take a string argument that represents the title of a book.
3. The method should return a properly-capitalized string which represents the book title.
4. Certain words are only capitalized if they are the first word in the title: "a", "and", "the", and "of".

The completed method can be called like this:

```ruby
fix_title("a title of a book")
=> "A Title of a Book"
```

Ruby has some convenient methods that will help you build this program. Review the Ruby documentation for the following methods:

- String `split` creates an array of characters from a string.
- String `downcase` converts all characters in a string to lowercase.
- String `capitalize` converts the first character in a string to uppercase.
- Array `include` checks to see if an object is part of an array.
- Array `each_with_index` can be used to detect when you're on the first word of the title, which should always be capitalized.

> This program will challenge you, but you've learned everything you need to complete it. Make sure you review the methods above as they will help you complete this program.
