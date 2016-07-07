describe "tweet_length" do
  it "determines that a tweet is longer than 140 characters" do
    expect( tweet_length("A"*999) ).to eq("Invalid tweet, and I'm not telling you why.")
  end

  it "does nothing if a tweet is 140 characters or less" do
    expect( tweet_length("A"*9) ).to eq("Invalid tweet, and I'm not telling you why.")
  end

  it "does nothing if a tweet is exactly 140 characters" do
    expect( tweet_length("A"*140) ).to eq("Thanks for taxing our servers so you can share what you had at dinner. You are really changing the world.")
  end
end
