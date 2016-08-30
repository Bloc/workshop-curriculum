describe "mix_the_colors" do
  it "returns a single color if provided" do
    expect( mix_the_colors(false, true, false) ).to eq("Yellow")
  end

  it "returns a mix of Red and Blue" do
    expect( mix_the_colors(true, false, true) ).to eq("Violet")
  end

  it "returns a mix of Yellow and Blue" do
    expect( mix_the_colors(false, true, true) ).to eq("Green")
  end

  it "returns Black" do
    expect( mix_the_colors(true, true, true) ).to eq("Black")
  end

  it "returns None if no colors are present" do
    expect( mix_the_colors(false, false, false) ).to eq("None")
  end
end
