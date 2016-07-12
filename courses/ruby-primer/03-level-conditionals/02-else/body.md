<!-- { ids:[68], language:'Ruby', type:'workshop', order: 1, name:'Else Expression', description:'Learn how to evaluate arguments and determine values with the else expression.' }-->

### Objectives

After this exercise you should be able to:

- Describe an `else` expression.
- Apply an `else` expression to evaluate a method's argument.
- Apply an `else` expression to determine a method's return value.

### Example

Our apple stand program will give an apple to a customer who pays us $2.00, but if the customer gives us a different amount, our program does nothing. (It returns `nil`, and `nil` represents nothingness.) We're basically staring blankly at any customer who gives us an amount other than $2.00. That's super awkward, and we can do better. We need to account for the condition when a customer gives us more or less than $2.00. We can do this with an `else` expression:

```ruby
def can_buy_apple_with(money)
  if money == 2
    "Here's your delicious apple!"
  else
    "I'm sorry, this apple costs $2.00."
  end
end
```

Let's call this method and see what happens:

```ruby
# The customer tries to swindle us, so NO APPLE FOR YOU!
can_buy_apple_with(1)
=> "I'm sorry, this apple costs $2.00."

# the customer is flaunting their money, so NO APPLE FOR YOU!
can_buy_apple_with(5)
=> "I'm sorry, this apple costs $2.00."

# the customer believes in fair trade!
can_buy_apple_with(2)
=> "Here's your delicious apple!"
```

In the example above we used an `else` to handle the condition where `money` is not equal to 2. We didn't need to specify a condition for `else` because it will handle the opposite of the `if` condition – any value that is not equal to 2. In other words, when the `if` expression evaluates to `false`, the code in the `else` branch will be executed.
