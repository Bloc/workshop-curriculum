describe "tweet_length" do
  it "returns the character count difference if a tweet is less than 140 characters and the payment is $1.00" do
    expect( tweet_length("A"*130, 1) ).to eq("You can use 10 more characters if you want!")
  end

  it "returns 'You tweeted a perfect tweet!' if a tweet is exactly 140 characters and the payment is $1.00" do
    expect( tweet_length("A"*140, 1) ).to eq("You tweeted a perfect tweet!")
  end

  it "returns the character count difference if a tweet is longer than 140 characters and the payment is $1.00" do
    expect( tweet_length("A"*999, 1) ).to eq("You are 859 characters over your limit of 140!")
  end

  it "returns 'You must pay $1.00 for tweets now!' if a tweet is exactly 140 characters and the payment is not $1.00" do
    expect( tweet_length("A"*140, 0) ).to eq("You must pay $1.00 for tweets now!")
  end
end
