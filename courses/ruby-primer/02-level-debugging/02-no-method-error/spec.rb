describe "hello" do
  it "returns 'Hello World' when passed 'World'" do
    expect( hello("World") ).to eq("Hello World!")
  end
  it "returns 'Hello Bob' when passed 'Bob'" do
    expect( hello("Bob") ).to eq("Hello Bob!")
  end
end
