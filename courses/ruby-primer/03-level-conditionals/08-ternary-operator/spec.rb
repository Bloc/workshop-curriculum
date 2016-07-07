describe "odd_or_even" do
  it "returns 'odd' when the sum of the arguments' length is odd" do
    expect( odd_or_even("Ruby", "Rails") ).to eq("odd")
  end

  it "returns 'even' when the sum of the arguments' length is even" do
    expect( odd_or_even("Ruby", "Code") ).to eq("even")
  end
end
