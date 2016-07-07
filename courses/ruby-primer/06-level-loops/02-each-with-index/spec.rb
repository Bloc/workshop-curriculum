describe "multiply_the_odds" do
  it "returns 21 when passed an array [1,3,5,7]" do
    expect( multiply_the_odds([1,3,5,7]) ).to eq(21)
  end

  it "returns 1 when passed a single element array" do
    expect( multiply_the_odds([8]) ).to eq(1)
  end

  it "returns 0 when passed an empty array" do
    expect( multiply_the_odds([]) ).to eq(0)
  end
end
