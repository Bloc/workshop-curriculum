describe "my_keys" do
  it "returns keys for a small hash" do
    h = { name: "Computer", cost: "$1,000" }
    keys = [:name, :cost]

    expect( my_keys(h) ).to eq(keys)
  end
  it "returns keys for a larger hash" do
    h = { name: "Mouse", cost: "$5", uuid: "1234" }
    keys = [:name, :cost, :uuid]

    expect( my_keys(h) ).to eq(keys)
  end
end
