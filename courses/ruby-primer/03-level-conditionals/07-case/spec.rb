describe "odd_or_even" do
  it "returns 'odd' when the argument length is odd" do
    expect( odd_or_even("Rails") ).to eq("odd")
  end

  it "returns 'even' when the argument length is even" do
    expect( odd_or_even("Ruby") ).to eq("even")
  end
end
