describe "calculate_taxes" do
  it "returns 0 in the bottom tax bracket" do
    expect( calculate_taxes(0) ).to eq(0)
    expect( calculate_taxes(100) ).to eq(0)
    expect( calculate_taxes(1000) ).to eq(0)
    expect( calculate_taxes(11999) ).to eq(0)
  end

  it "returns 5% in the second-to-bottom tax bracket" do
    expect( calculate_taxes(12000) ).to eq(12000 * 0.05)
    expect( calculate_taxes(15432) ).to eq(15432 * 0.05)
    expect( calculate_taxes(24999) ).to eq(24999 * 0.05)
  end

  it "returns 8% in the third-to-bottom tax bracket" do
    expect( calculate_taxes(25000) ).to eq(12000 * 0.08)
    expect( calculate_taxes(30123) ).to eq(15432 * 0.08)
    expect( calculate_taxes(49999) ).to eq(24999 * 0.08)
  end

  it "returns 10.5% in the third-highest tax bracket" do
    expect( calculate_taxes(50000) ).to eq(50000 * 0.105)
    expect( calculate_taxes(75432) ).to eq(75432 * 0.105)
    expect( calculate_taxes(99999) ).to eq(99999 * 0.105)
  end

  it "returns 15% in the second-highest tax bracket" do
    expect( calculate_taxes(100000) ).to eq(100000 * 0.15)
    expect( calculate_taxes(123456) ).to eq(123456 * 0.15)
    expect( calculate_taxes(249999) ).to eq(249999 * 0.15)
  end
  
  it "returns 19% for everything else" do
    expect( calculate_taxes(250000) ).to eq(250000 * 0.19)
    expect( calculate_taxes(123123123) ).to eq(123123123 * 0.15)
    expect( calculate_taxes(101010101) ).to eq(101010101 * 0.15)
  end
end
