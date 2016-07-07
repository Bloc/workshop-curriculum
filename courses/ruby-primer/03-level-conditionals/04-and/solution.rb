def tweet_length(tweet, payment)
  if tweet.length == 140 && payment == 1
    "You tweeted a perfect tweet!"
  elsif tweet.length > 140 && payment == 1
    "You are #{tweet.length-140} characters over your limit of 140!"
  elsif tweet.length < 140 && payment == 1
    "You can use #{140 - tweet.length} more characters if you want!"
  elsif payment != 1
    "You must pay $1.00 for tweets now!"
  end
end
