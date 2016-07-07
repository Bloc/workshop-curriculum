describe "create_array" do
  it "creates an array of numbers" do
    expect( create_array(1,2,3,4) ).to eq([1,2,3,4])
  end
  it "creates an array of strings" do
    expect( create_array("a", "b", "c", "d") ).to eq(["a", "b", "c", "d"])
  end
  it "creates an array of non-sequential objects" do
    expect( create_array(1,4,2,3) ).to eq([1,4,2,3])
  end
end
