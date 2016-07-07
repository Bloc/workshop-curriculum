describe "compare_these" do
  it "should return true if the values are equal" do
    expect( compare_these(4,4) ).to eq(true)
  end

  it "should return false if the values are not equal" do
    expect( compare_these("a string",4) ).to eq(false)
  end
end
