def tweet_length(tweet, payment, is_employee)
  if tweet.length == 140 && ( payment == 1 || is_employee )
    "You tweeted a perfect tweet!"
  elsif tweet.length > 140 && ( payment == 1 || is_employee )
    "You are #{tweet.length-140} characters over your limit of 140!"
  elsif tweet.length < 140 && ( payment == 1 || is_employee )
    "You can use #{140 - tweet.length} more characters if you want!"
  elsif payment != 1 || !is_employee
    "You must pay $1.00 for tweets now!"
  end
end
