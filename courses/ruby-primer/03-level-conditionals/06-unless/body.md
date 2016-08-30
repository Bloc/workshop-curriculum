<!-- { ids:[71], language:'Ruby', type:'workshop', order: 5, name:'Unless Expression', description:'Learn how to evaluate arguments and determine values with unless statements.' }-->

### Objectives

After this exercise you should be able to:

- Describe an `unless` expression.
- Apply an `unless` expression to evaluate a method's argument.
- Apply an `unless` expression to determine a method's return value.

### Example

The `if` statement is common in programming, but Ruby offers an alternative. Depending on the condition you're evaluating, the opposite of `if` _might_ make your code more readable. For these special situations, we can use the `unless` statement.

For example, let's say we perform this check in our method:

```ruby
def whats_in_the_fridge?(im_hungry)
  if im_hungry == false
    return nil
  end
  #... grab something from the fridge
end
```

The `if` statement requires three lines of code and performs no meaningful work, so we can simplify it using `unless`. Here's the same logic re-written with `unless`:

```ruby
def whats_in_the_fridge?(im_hungry)
  return nil unless im_hungry
  #... grab something from the fridge
end
```

We can read this `unless` statement like an English sentence, "return nothing unless I'm hungry." The structure of the `unless` statement follows this schema: `{code} unless {conditional statement}`.

If the conditional statement evaluates to `true`, Ruby skips the line and moves to the next. If the statement is `false`, Ruby executes the code.
