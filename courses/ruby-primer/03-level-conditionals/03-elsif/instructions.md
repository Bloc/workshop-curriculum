### Exercise

1. Define a method named `tweet_length`.
2. The method should take a string argument.
3. The method should return a string that reads `"You tweeted a perfect tweet!"` if the argument is exactly 140 characters.
4. If the argument is longer than 140 characters, return a string that tells the user how many characters they were over the limit. If the argument is 145 characters the message should read `"You are 5 characters over your limit of 140!"`.
5. If the argument is less than 140 characters, return a string that tells the user how many characters they were under the limit. If the argument is 135 characters the message should read `"You can use 5 more characters if you want!"`.

The completed method can be called like this:

```ruby
puts tweet_length("X"*145)

=> "You are 5 characters over your limit of 140!"

puts tweet_length("Y"*135)
=> "You can use 5 more characters if you want!"

puts tweet_length("Z"*140)
=> "You tweeted a perfect tweet!"
```

> We used a trick in the method calls above. Ruby allows us to multiple a string by a number. For example "A"*3 will return "AAA".
