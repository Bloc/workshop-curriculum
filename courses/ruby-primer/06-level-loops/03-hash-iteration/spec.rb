describe "hash_to_array" do
  it "returns array for short hash" do
    hash = { name: "Bob", age: 34 }
    array = [ "name is Bob", "age is 34" ]

    expect( hash_to_array(hash) ).to eq(array)
  end

  it "returns array for longer hash" do
    hash = { name: "Joe", age: 34, sex: :male }
    array = [ "name is Joe", "age is 34", "sex is male" ]

    expect( hash_to_array(hash) ).to eq(array)
  end

  it "returns 'no pizza?' for an empty hash" do
    hash = { }
    expect( hash_to_array(hash) ).to eq("no pizza?")
  end
end
