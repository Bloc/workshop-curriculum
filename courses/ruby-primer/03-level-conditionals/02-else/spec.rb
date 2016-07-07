describe "tweet_length" do
  it "returns 'You tweeted!' if a tweet is 140 characters or less" do
    expect( tweet_length("A"*9) ).to eq("You tweeted!")
  end

  it "returns 'You tweeted!' if a tweet is exactly 140 characters" do
    expect( tweet_length("A"*140) ).to eq("You tweeted!")
  end

  it "returns the character count difference if a tweet is longer than 140 characters" do
    expect( tweet_length("A"*999) ).to eq("You are 859 characters over your limit of 140!")
  end
end
