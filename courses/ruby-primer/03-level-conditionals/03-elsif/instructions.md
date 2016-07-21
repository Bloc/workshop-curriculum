### Exercise

1. Define a method named `tweet_length`.
2. The method should take a single argument, the number of characters in the tweet.
3. The method should return, "Tweet Posted" if the number of characters is _exactly_ 140.
4. The method should return the number of characters remaining if the number of characters used is less than 140.
5. Lastly, the method should return (in the negative) the number of characters the user must delete if the number exceeds 140.

In use:

```ruby
puts tweet_length(145)
=> -5

puts tweet_length(135)
=> 5

puts tweet_length(140)
=> 0
```
