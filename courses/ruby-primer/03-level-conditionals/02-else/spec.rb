describe "tweet_length" do
  it "returns 0 if a tweet is 140 characters or less" do
    expect( tweet_length("A"*9) ).to eq(0)
  end

  it "returns 0 if a tweet is exactly 140 characters" do
    expect( tweet_length("A"*140) ).to eq(0)
  end

  it "returns the character count difference if a tweet is longer than 140 characters" do
    count = 140 + rand(200)
    expect( tweet_length(count) ).to eq(140 - count)
  end
end
