<!-- { ids:[73], language:'Ruby', type:'workshop', order: 7, name:'Ternary Operator', description:'Learn how to evaluate conditions with a single line of code.' }-->

### Objectives

After this exercise you should be able to:

- Describe a ternary operator.
- Apply a ternary operator to evaluate a method's argument.
- Apply a ternary operator to determine a method's return value.

### Example

We could use and `if` or `case` expression to determine if a string's length is odd or even:

```ruby
def odd_or_even(arg)
  if arg.length % 2 == 0
    "even"
  else
    "odd"
  end
end

def odd_or_even(arg)
  length = arg.length

  case length
  when length % 2 == 0
    "even"
  else
    "odd"
  end
end
```

Ruby provides a ternary operator that allows us to evaluate simple conditions like this on one line:

```ruby
def odd_or_even(arg)
  arg.length % 2 == 0 ? "even" : "odd"
end
```

Once you get used to the syntax – namely the `?` (which stands for "then") and `:` (which stands for "else"), this can be easier to read than an `if` or `case` expression. Ternary operators offer coders an option to be terse, which at times can lead to easier readability.
