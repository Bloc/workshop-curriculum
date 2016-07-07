describe "hello" do
  it "returns a full greeting for Abraham Lincoln" do
    expect( hello("Abraham", "Lincoln") ).to eq("Hello Abraham Lincoln!")
  end
  it "returns a full greeting for George Washington" do
    expect( hello("George", "Washington") ).to eq("Hello George Washington!")
  end
end
