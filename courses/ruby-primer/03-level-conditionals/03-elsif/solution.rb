def tweet_length(tweet)
  if tweet.length == 140
    "You tweeted a perfect tweet!"
  elsif tweet.length > 140
    "You are #{tweet.length-140} characters over your limit of 140!"
  else
    "You can use #{140 - tweet.length} more characters if you want!"
  end
end
