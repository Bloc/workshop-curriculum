def tweet_length(tweet)
  unless tweet.length == 140
    "Invalid tweet, and I'm not telling you why."
  else
    "Thanks for taxing our servers so you can share what you had at dinner. You are really changing the world."
  end
end
