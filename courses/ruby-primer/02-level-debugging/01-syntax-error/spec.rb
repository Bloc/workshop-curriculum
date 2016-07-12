describe "hello" do
  it "returns 'Hello World!' when passed 'World'" do
    expect( hello("World") ).to eq("Hello World!")
  end

  it "returns 'Hello Mary!' when passed 'Mary'" do
    expect( hello("Mary") ).to eq("Hello Mary!")
  end
end
