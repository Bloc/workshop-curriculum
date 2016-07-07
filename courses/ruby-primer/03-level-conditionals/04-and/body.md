<!-- { ids:[69], language:'Ruby', type:'workshop', order: 3, name:'And Operator', description:'Learn how to refine a condition using the and operator.' }-->

### Objectives

After this exercise you should be able to:

- Describe the `and` operator.
- Apply the `and` operator in an `if` expression.

### Example

Our apple stand is successful, but some customers are requesting to pay with credit cards instead of cash. We're not ready to accept credit cards yet, and want to remain a cash business. We'll need to refine our condition that currently only checks for money, such that we also can check for the payment type. Ruby provides an "and" operator that allows us to make a condition more specific:

```ruby
def can_buy_apple_with(money, payment_type)
  if money == 2 && payment_type == "cash"
    "Here's your delicious apple!"
  elsif money < 2 && payment_type == "cash"
    "I'm sorry, this apple costs $2.00, you swindler!"
  elsif money > 2 && payment_type == "cash"
    "I'm sorry, this apple costs $2.00. Go flaunt your money elsewhere!"
  elsif payment_type != "cash"
    "I'm sorry, we don't take credit cards yet."
  end
end
```

We introduced two new symbols above. We used the "and" (`&&`) operator to check for a payment type along with the amount of money. We also used "does not equal" (`!=`) comparison operator in the final `elsif`.

Let's call this method and see what happens:

```ruby
# The customer tries to swindle us, so NO APPLE FOR YOU!
can_buy_apple_with(1, "cash")
=> "I'm sorry, this apple costs $2.00, you swindler!"

# the customer is flaunting their money, so NO APPLE FOR YOU!
can_buy_apple_with(5, "credit")
=> "I'm sorry, we don't take credit cards yet."

# the customer believes in fair trade, but is cash poor.
can_buy_apple_with(2, "credit")
=> "I'm sorry, we don't take credit cards yet."

# the customer believes in fair trade, and has the cash-money to buy an apple!
can_buy_apple_with(2, "cash")
=> "Here's your delicious apple!"
```

### Exercise

We've decided to monetize our tweet business, and will charge users $1.00 per tweet. We will not accept a payment other than $1.00.

1. Define a method named `tweet_length`.
2. The method should take a string argument and a number argument.
3. The string argument represents the tweet, and number argument represents their payment.
4. The method should return a string that reads `"You tweeted a perfect tweet!"` if the argument is exactly 140 characters and the payment is equal to 1.
5. If the argument is longer than 140 characters and the payment is equal to 1, return a string that tells the user how many characters they were over the limit. If the argument is 145 characters the message should read `"You are 5 characters over your limit of 140!"`.
6. If the argument is less than 140 characters and the payment is equal to 1, return a string that tells the user how many characters they were under the limit. If the argument is 135 characters the message should read `"You can use 5 more characters if you want!"`.
7. If the payment is anything but 1, return `"You must pay $1.00 for tweets now!"`, regardless of the tweet length.

The completed method can be called like this:

```ruby
puts tweet_length("X"*145, 1)

=> "You are 5 characters over your limit of 140!"

puts tweet_length("Y"*135, 1)
=> "You can use 5 more characters if you want!"

puts tweet_length("Y"*135, 0)
=> "You must pay $1.00 for tweets now!"

puts tweet_length("Z"*140, 1)
=> "You tweeted a perfect tweet!"

puts tweet_length("Z"*140, 2)
=> "You must pay $1.00 for tweets now!"
```
