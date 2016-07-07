describe "Weather" do
  it "returns the weather in various cities" do
    weather(:san_francisco).should eq(60)
    weather(:chicago).should eq(30)
    weather(:miami).should eq(70)
    weather(:los_angeles).should eq(80)
    weather(:anchorage).should eq(10)
  end
end
