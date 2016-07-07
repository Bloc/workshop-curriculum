describe "odd_or_even_array" do
  it "odd length array returns an array consisting of the first, middle, and last elements" do
    expect( odd_or_even_array([1,2,3,4,5]) ).to eq([1,3,5])
  end
  
  it "even length array returns an array consisting of the first and last elements" do
    expect( odd_or_even_array(["a", "b", "c", "d"]) ).to eq(["a", "d"])
  end
end
