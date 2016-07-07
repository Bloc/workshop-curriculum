describe "sum_numbers" do
  it "returns 15 when passed an array [5,5,5]" do
    expect( sum_numbers([5,5,5]) ).to eq(15)
  end

  it "returns 0 when passed an array [0]" do
    expect( sum_numbers([0]) ).to eq(0)
  end

  it "returns 0 when passed an empty array" do
    expect( sum_numbers([]) ).to eq(0)
  end
end
