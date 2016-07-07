describe "merge_us" do
  it "merges two hashes that are unique" do
    h1 = { name: "Computer", cost: "$1,000" }
    h2 = { first_name: "Bob", age: 34 }
    new_hash = { name: "Computer", cost: "$1,000", first_name: "Bob", age: 34 }

    expect( merge_us(h1, h2) ).to eq(new_hash)
  end
  it "merges two hashes that have overlapping sets" do
    h1 = { name: "Computer", cost: "$1,000" }
    h2 = { name: "Mouse", uuid: "1234" }
    new_hash = { name: "Mouse", cost: "$1,000", uuid: "1234" }

    expect( merge_us(h1, h2) ).to eq(new_hash)
  end
end
