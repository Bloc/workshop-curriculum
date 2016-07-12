<!-- { ids:[67], language:'Ruby', type:'workshop', order: 0, name:'If Expression', description:'Learn how to evaluate arguments and determine values with the if expression.' }-->

### Objectives

After this exercise you should be able to:

- Describe an `if` expression.
- Apply an `if` expression to evaluate a method's argument.
- Apply an `if` expression to determine a method's return value.

### Example

Sometimes your code has to make decisions. But since computers aren't self-aware (yet), we must provide a set of options to choose from. In coding, we use conditional logic to provide a set of options, based on given arguments. The most common way to use conditional logic is with an `if` expression. An `if` expression considers a given condition, and then does something based on the result of the condition.

Pretend you're writing a program for an apple stand, and each apple costs $2.00. If a customer gives you $2.00, you give them an apple – capitalism at its finest!

Our program needs to make a decision based on how much money the customer gives us. Let's start with a method named `can_buy_apple_with?`:

```ruby
def can_buy_apple_with(money)
  if money == 2
    "Here's your delicious apple!"
  end
end
```

Let's call this method and see what happens:

```ruby
# The customer tries to swindle us, so NO APPLE FOR YOU!
can_buy_apple_with(1)
=> nil

# the customer is flaunting their money, so NO APPLE FOR YOU!
can_buy_apple_with(5)
=> nil

# the customer believes in fair trade!
can_buy_apple_with(2)
=> "Here's your delicious apple!"
```

We called the method three times above. The first two calls returned `nil` because the method only returns a message when the customer gives us $2.00. On the third call the customer gives us $2.00, so the `if` expression evaluates to true, and a message is returned. The `if` expression decides what to do based on the `money` argument, and returns a value as appropriate.
