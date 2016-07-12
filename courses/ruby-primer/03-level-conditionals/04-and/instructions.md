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
