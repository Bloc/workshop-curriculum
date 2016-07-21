<!-- { ids:[67], language:'Ruby', type:'workshop', order: 0, name:'If Expression', description:'Learn how to evaluate arguments and determine values with the if expression.' }-->

### Objectives

After this exercise you should be able to:

- Describe an `if` expression.
- Apply an `if` expression to evaluate a method's argument.
- Apply an `if` expression to determine a method's return value.

### Example

Sometimes our code has to make a decision but computers aren't self-aware (yet), so we must provide options to choose from. And we use conditional logic to determine which option to execute.

The most common way to choose between options is with an `if` expression. An `if` expression evaluates a conditional statement (resulting in `true` or `false`), and performs a specific action based on the result.

The `if` expression looks like this:

```ruby
if conditional_statement
  # do work if the `conditional_statement` was `true`
end
# jump here if the `conditional_statement` was false
```

Pretend you're writing a program for an apple stand, and each apple costs $2.00. If a customer gives you at least $2.00, you give them an apple – capitalism at its finest!

Our program needs to make a decision based on how much money the customer gives us. Let's start with a method named, `can_buy_apple_with?`:

```ruby
def can_buy_apple_with?(money)
  if money >= 2
    return true
  end
end
```

> In this method, the conditional statement is `money >= 2`.

Let's call this method and see what happens:

```ruby
can_buy_apple_with?(1)
=> nil

can_buy_apple_with?(5)
=> true

can_buy_apple_with?(2)
=> true
```

The `if` expression decides what to do based on the `money` argument, and returns the appropriate value.
