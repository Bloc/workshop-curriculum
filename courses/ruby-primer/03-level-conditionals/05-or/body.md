<!-- { ids:[70], language:'Ruby', type:'workshop', order: 4, name:'Or Operator', description:'Learn how to refine a condition using the or operator.' }-->

### Objectives

After this exercise you should be able to:

- Describe the `or` operator.
- Apply the `or` operator in an `if` expression.

### Example

Our apple stand continues to flourish, but the pressure for us to accept credit cards is palpable. We want to please our customers, so we'll update our program to accept cash or credit. We will draw a firm line on checks though – not now, not ever! We'll need to refine our condition such that it gives an apple to a customer who pays us $2.00 and pays with either cash or credit. Ruby provides an "or" operator that allows us to do this:

```ruby
def can_buy_apple_with(money, payment_type)
  if money == 2 && ( payment_type == "cash" || payment_type == "credit" )
    "Here's your delicious apple!"
  elsif money < 2 && ( payment_type == "cash" || payment_type == "credit" )
    "I'm sorry, this apple costs $2.00, you swindler!"
  elsif money > 2 && ( payment_type == "cash" || payment_type == "credit" )
    "I'm sorry, this apple costs $2.00. Go flaunt your money elsewhere!"
  elsif payment_type != "cash" || payment_type != "credit"
    "I'm sorry, we only take cash or credit. Take your checks back to 1995 where they belong."
  end
end
```

We introduced the "or" (`||`) operator to check if the payment type is cash or credit. We also used parentheses around our "or" condition. These are necessary to ensure a proper order of operation, and also to improve readability.

Let's call this method and see what happens:

```ruby
# The customer tries to swindle us, so NO APPLE FOR YOU!
can_buy_apple_with(1, "cash")
=> "I'm sorry, this apple costs $2.00, you swindler!"

# the customer is flaunting their money, so NO APPLE FOR YOU!
can_buy_apple_with(5, "credit")
=> "I'm sorry, this apple costs $2.00. Go flaunt your money elsewhere!"

# the customer believes in fair trade, and has a credit card addiction.
can_buy_apple_with(2, "credit")
=> "Here's your delicious apple!"

# the customer believes in fair trade, and has the cash-money to buy an apple!
can_buy_apple_with(2, "cash")
=> "Here's your delicious apple!"

# the customer believes in fair trade, but is penalized for using a check and annoying everyone behind them in line.
can_buy_apple_with(2, "check")
=> "I'm sorry, we only take cash or credit. Take your checks back to 1995 where they belong."
```
