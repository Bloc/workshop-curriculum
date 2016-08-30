describe "calculate_interest" do
  it "calculates interest with valid params" do
    expect ( calculate_interest(1000, 0.03, 15) ).to eq(1000 * (1 + 0.03 * 15))
    expect ( calculate_interest(300, 0.1, 10) ).to eq(300 * (1 + 0.1 * 10))
    expect ( calculate_interest(455000, 0.06, 25) ).to eq(455000 * (1 + 0.06 * 25))
  end

  it "returns the principal with invalid params" do
    expect ( calculate_interest(1000, 0, 15) ).to eq(1000)
    expect ( calculate_interest(300, 0.1, .9) ).to eq(300)
    expect ( calculate_interest(455000, 0, 0) ).to eq(455000)
  end
end
