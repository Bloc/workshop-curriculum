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
