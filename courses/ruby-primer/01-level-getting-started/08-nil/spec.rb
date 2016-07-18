describe "which_hand?" do
  it "returns the left value" do
    left = 1 + range(200)
    expect( which_hand?(left, nil) ).to eq(left)
  end

  it "returns the right value" do
    right = 1 + range(200)
    expect( which_hand?(nil, right) ).to eq(right)
  end

  it "returns a phrase" do
    expect( which_hand?(nil, nil) ).to eq("You're cheating!")
  end

  it "returns nil" do
    right = 1 + range(200)
    expect( which_hand?(1000, right) ).to eq(nil)
  end
end
