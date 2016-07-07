describe "houses_of_westeros" do
  it "returns the correct last name in a sentence" do
    expect( houses_of_westeros(:sansa) ).to eq("A member of House Stark.")
  end
end
