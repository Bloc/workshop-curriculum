describe "Triangle" do
  it "tells if a triangle is equilateral" do
    triangle(2,2,2).should eq(:equilateral)
  end

  it "tells if a triangle is isosceles" do
    triangle(2,2,3).should eq(:isosceles)
    triangle(2,3,2).should eq(:isosceles)
    triangle(3,2,2).should eq(:isosceles)
  end

  it "tells if a triangle is scalene" do
    triangle(2,3,4).should eq(:scalene)
    triangle(3,4,2).should eq(:scalene)
    triangle(4,2,3).should eq(:scalene)
  end

  it "tells if a triangle is invalid" do
    triangle(2,2,4).should eq(:invalid)
    triangle(4,2,2).should eq(:invalid)
    triangle(2,4,2).should eq(:invalid)
  end
end
