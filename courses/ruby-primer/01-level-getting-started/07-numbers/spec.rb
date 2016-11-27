describe "pythagorean_theorem" do
  it "returns 12 when provided with 0, 5, 13" do
    expect( pythagorean_theorem(0, 5, 13) ).to eq(12)
  end

  it "returns the root of 3 when provided with 1, 0, 2" do
    expect( pythagorean_theorem(1, 0, 2) ).to eq(3 ** .5)
  end

  it "returns 5 when provided with 3, 4, 0" do
    expect( pythagorean_theorem(3, 4, 0) ).to eq(5)
  end

  it "returns the correct values when randomly generated" do
    a = 1 + rand(100)
    b = 1 + rand(200)
    expect( pythagorean_theorem(a, b, 0) ).to eq(((a ** 2) + (b ** 2)) ** .5)
  end
end
