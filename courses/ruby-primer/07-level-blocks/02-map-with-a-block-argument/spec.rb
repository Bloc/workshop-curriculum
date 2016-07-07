describe "add_two" do
  it "adds 2 to each element in an array" do
    a = [1, 2, 3]
    r = [3, 4, 5]
    expect( add_two(a) ).to eq(r)
  end
  
  it "adds 2 to each element in a longer array" do
    a = [5, 7, 3, 12, 15]
    r = [7, 9, 5, 14, 17]
    expect( add_two(a) ).to eq(r)
  end
end
