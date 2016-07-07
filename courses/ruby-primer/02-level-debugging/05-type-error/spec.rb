describe "add" do
  it "returns a string with 1 and 2 added" do
    expect( add(1,2) ).to eq("1 + 2 = 3")
  end
  it "returns a string with 5 and 7 added" do
    expect( add(5,7) ).to eq("5 + 7 = 12")
  end
end
