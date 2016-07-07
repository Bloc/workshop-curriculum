describe "am_i_nil?" do
  it "returns true when provided with an invalid index" do
    expect( am_i_nil?("Bloc", 8) ).to eq(true)
  end

  it "returns false when provided with a valid index" do
    expect( am_i_nil?("Bloc", 2) ).to eq(false)
  end
end
