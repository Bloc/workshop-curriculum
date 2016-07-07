def tweet_length(tweet)
  if tweet.length <= 140
    "You tweeted!"
  else
    "You are #{tweet.length-140} characters over your limit of 140!"
  end
end
