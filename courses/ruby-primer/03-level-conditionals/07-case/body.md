<!-- { ids:[72], language:'Ruby', type:'workshop', order: 6, name:'Case Expression', description:'Learn how to evaluate arguments and determine values with the case expression.' }-->

### Objectives

After this exercise you should be able to:

- Describe a `case` expression.
- Use a `case` expression to evaluate a method's argument.
- Use a `case` expression to determine a method's return value.

### Example

A `case` expression allows us to evaluate arguments based on specified conditions, much like an `if` or `unless` expression. The difference is that it's more flexible and, depending on the conditions, may be more readable. Consider the following `if` expression:

```ruby
def my_mood(emoji)
  if emoji == ":)"
    "I'm happy."
  elsif emoji == ":|"
    "I'm stoic."
  elsif emoji == ":("
    "I'm sad."
  else
    "I don't know what I feel."
  end
end
```

We can make this logic easier to read with a `case` expression:

```ruby
def my_mood(emoji)
  case emoji
  when ":)"
    "I'm happy."
  when ":|"
    "I'm stoic."
  when ":("
    "I'm sad."
  else
    "I don't know what I feel."
  end
end
```

We can also use the `then` keyword to make our implementation even more readable:

```ruby
def my_mood(emoji)
  case emoji
    when ":)" then "I'm happy."
    when ":|" then "I'm stoic."
    when ":(" then "I'm sad."
    else "I don't know what I feel."
  end
end
```

If you find yourself writing a long chain of `if`/`elsif` statements that perform one or two lines of code each, that's an opportunity to switch them to a case statement. In most cases, an `if` will suffice.
