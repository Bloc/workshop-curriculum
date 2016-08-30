describe "tweet_length" do
  it "determines that a tweet is longer than 140 characters" do
    expect( tweet_length(192) ).to eq(false)
  end

  it "does nothing if a tweet is 140 characters or less" do
    expect( tweet_length(120) ).to eq(true)
  end

  it "does nothing if a tweet is exactly 140 characters" do
    expect( tweet_length(140) ).to eq(true)
  end
end
