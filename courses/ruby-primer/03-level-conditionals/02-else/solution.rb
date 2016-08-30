def tweet_length(char_count)
  if char_count <= 140
    0
  else
    140 - char_count
  end
end
