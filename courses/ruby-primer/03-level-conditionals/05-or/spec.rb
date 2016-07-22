describe "is_adult?" do
  it "returns true for adults" do
    expect( is_adult?(45) ).to eq(true)
  end

  it "returns false for children" do
    expect( is_adult?(5) ).to eq(false)
  end

  it "returns false for the elderly" do
    expect( is_adult?(65) ).to eq(false)
  end
end

describe "perform_search?" do
  it "returns true for adults" do
    expect( perform_search?(35, false) ).to eq(true)
  end

  it "returns false for children" do
    expect( perform_search?(4, false) ).to eq(false)
  end

  it "returns false for the elderly" do
    expect( perform_search?(68, false) ).to eq(false)
  end

  it "returns true as long as we do a random pat-down" do
    expect( perform_search?(68, true) ).to eq(true)
    expect( perform_search?(2, true) ).to eq(true)
    expect( perform_search?(43, true) ).to eq(true)
  end
end