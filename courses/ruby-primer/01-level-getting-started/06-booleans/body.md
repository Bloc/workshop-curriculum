<!-- { ids:[58], language:'Ruby', type:'workshop', order: 5, name:'Booleans', description:'Learn the boolean data type and apply it in a method.' }-->

### Objectives

After this exercise you should be able to:

- Define a boolean data type.
- Define a method which returns a boolean.
- Print a boolean.

### Example

A boolean is another data type. Like a string, a boolean represents a certain value. While a string represents a character, word, or sentence, a boolean can only represent one of two values – `true` or `false`.

A boolean requires a true / false question to be asked. We can ask true / false questions with comparison operators. Comparison operators evaluate to `true` or `false`. The operators available in Ruby are:

- `A == B` returns `true` if A and B are equal.
- `A > B` returns `true` if A is greater than B.
- `A < B` returns `true` if A is less than B.
- `A >= B` returns `true` if A is greater than or equal to B.
- `A <= B` returns `true` if A is less than or equal to B.
- `A != B` returns `true` if A and B differ.

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
We can assign the result of comparisons to boolean variables:

```ruby
my_bool = "Ruby" == "Ruby"
puts my_bool
=> true
```

```ruby
my_bool = 5 > 5
puts my_bool
=> false
```
