<!-- { ids:[58], language:'Ruby', type:'workshop', order: 5, name:'Booleans', description:'Learn the boolean data type and apply it in a method.' }-->

### Objectives

After this exercise you should be able to:

- Define a boolean data type.
- Understand how to define a method which returns a boolean.
- Understand how to print a boolean.

### Example

A boolean is a data type. Like a string, a boolean represents a certain value. While a string represents a character, word, or sentence, a boolean can only represent one of two values – `true` or `false`.

A boolean requires a true / false question to be asked. We can ask true / false questions with comparison operators. A comparison operator evaluates values and returns a true or false. The comparison operators available in Ruby are:

- `==` returns `true` if the values are equal.
- `>` returns `true` if the value on the left is greater than the value on the right.
- `<` returns `true` if the value on the left is less than the value on the right.
- `>=` returns `true` if the value on the left is greater than or equal to the value on the right.
- `<=` returns `true` if the value on the left is less than or equal to the value on the right.

We can compare strings:

```ruby
"this string" == "that string"
=> false
```

We can also compare numbers:

```ruby
99 > 9
=> true
```
We can assign the result of the comparisons to booleans:

```ruby
my_bool = "Ruby" == "Ruby"
puts my_bool
=> true

my_bool = 5 > 5
puts my_bool
=> false
```
