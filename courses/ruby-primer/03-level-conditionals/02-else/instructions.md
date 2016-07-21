### Exercise

1. Define a method named `tweet_length`.
2. The method should take a single argument, the number of characters in the tweet.
3. The method should return `0` if the number of characters is less than or equal to 140.
4. If the number of characters is over 140, the method should return the number of characters the user must delete before they can post their tweet (in the negative).

In use:

```ruby
puts tweet_length(82)
=> 0

puts tweet_length(140)
=> 0

puts tweet_length(141)
=> -1

puts tweet_length(200)
=> -60
```
