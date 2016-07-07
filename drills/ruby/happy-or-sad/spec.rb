describe "Hash mood" do
  it "returns a smiley if it's happy" do
    smiley({"mood" => "happy"}).should eq(":)")
  end

  it "returns a frowney if it's sad" do
    smiley({"mood" => "sad"}).should eq(":(")
  end

  it "returns a bar-face if it's anything else" do
    smiley({"mood" => "weird"}).should eq(":|")
  end
end
