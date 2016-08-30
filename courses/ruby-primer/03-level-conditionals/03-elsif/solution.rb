def tweet_length(tweet)
  if tweet == 140
    "Tweet Posted"
  else
    140 - tweet
  end
end
