describe "tweet_length" do
  it "returns the character count difference if a tweet is less than 140 characters" do
    expect( tweet_length("A"*130) ).to eq("You can use 10 more characters if you want!")
  end

  it "returns 'You tweeted a perfect tweet!' if a tweet is exactly 140 characters" do
    expect( tweet_length("A"*140) ).to eq("You tweeted a perfect tweet!")
  end

  it "returns the character count difference if a tweet is longer than 140 characters" do
    expect( tweet_length("A"*999) ).to eq("You are 859 characters over your limit of 140!")
  end
end
