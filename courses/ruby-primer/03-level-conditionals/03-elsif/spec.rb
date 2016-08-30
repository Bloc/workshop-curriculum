describe "tweet_length" do
  it "returns the character count difference if a tweet is less than 140 characters" do
    expect( tweet_length("A"*130) ).to eq(10)
  end

  it "returns 'Tweet Posted' if a tweet is exactly 140 characters" do
    expect( tweet_length("A"*140) ).to eq("Tweet Posted")
  end

  it "returns the character count difference if a tweet is longer than 140 characters" do
    count = 140 + rand(200)
    expect( tweet_length(count) ).to eq(140 - count)
  end
end
