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

### Exercise

We upset our Tweet & Co. employees with our new pay-to-tweet program. We've decided to allow employees of Tweet & Co. to tweet for free. We'll update our program accordingly.

1. Define a method named `tweet_length`.
2. The method should take a string argument, a number argument, and a boolean argument.
3. The string argument represents the tweet, the number argument represents their payment, and the boolean argument represents if they're an employee or not.
4. The method should return a string that reads `"You tweeted a perfect tweet!"` if the argument is exactly 140 characters, and the payment is equal to 1 or the user is an employee.
5. If the argument is longer than 140 characters, and the payment is equal to 1 or the user is an employee, return a string that tells the user how many characters they were over the limit. If the argument is 145 characters the message should read `"You are 5 characters over your limit of 140!"`.
6. If the argument is less than 140 characters, and the payment is equal to 1 or the user is an employee, return a string that tells the user how many characters they were under the limit. If the argument is 135 characters the message should read `"You can use 5 more characters if you want!"`.
7. If the payment is anything but 1 and the user is not an employee return `"You must pay $1.00 for tweets now!"`, regardless of the tweet length.

The completed method can be called like this:

```ruby
puts tweet_length("X"*145, 1, true)

=> "You are 5 characters over your limit of 140!"

puts tweet_length("Y"*135, 1, true)
=> "You can use 5 more characters if you want!"

puts tweet_length("Y"*135, 0, false)
=> "You must pay $1.00 for tweets now!"

puts tweet_length("Z"*140, 1, true)
=> "You tweeted a perfect tweet!"

puts tweet_length("Z"*140, 2, false)
=> "You must pay $1.00 for tweets now!"
```
