describe "Leap years" do
  it "tells if a normal leap year is a leap year" do
    leap_year?(1983).should eq(false)
    leap_year?(1988).should eq(true)
  end
  it "tells that most years divisible by 100 are not leap years" do
    leap_year?(1900).should eq(false)
  end
  it "tells that years divisible by 400 are leap years" do
    leap_year?(2000).should eq(true)
  end
end
