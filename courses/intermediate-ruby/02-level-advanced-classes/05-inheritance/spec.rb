describe "Shape" do
  describe "larger_than?" do
    it "tells if a shape is larger than another shape" do
      class A < Shape
        def area
          5
        end
      end
      class B < Shape
        def area
          10
        end
      end
      a = A.new
      b = B.new
      expect( b.larger_than?(a) ).to eq(true)
      expect( a.larger_than?(b) ).to eq(false)
    end
  end
  describe "color" do
    it "is able to get and set color" do
      s = Shape.new
      expect( s.respond_to?(:color) ).to eq(true)
      expect( s.respond_to?(:color=) ).to eq(true)
    end
  end
end

describe "Rectangle" do
  describe "initialize" do
    it "takes width, height" do
      r = Rectangle.new(1, 2, "Blue")
      expect( r.width ).to eq(1)
      expect( r.height ).to eq(2)
      r = Rectangle.new(5, 6, "Blue")
      expect( r.width ).to eq(5)
      expect( r.height ).to eq(6)
    end
    it "is able to set a color if given" do
      r = Rectangle.new(1, 2, "Blue")
      expect( r.color ).to eq("Blue")
      r = Rectangle.new(1, 2, "Green")
      expect( r.color ).to eq("Green")
    end
    it "is able to set the default color to Red" do
      r = Rectangle.new(1, 2)
      expect( r.color ).to eq("Red")
    end
  end
  describe "area" do
    it "returns correct area for large rectangle" do
      r = Rectangle.new(100, 240)
      expect( r.area ).to eq(24000)
    end
    it "returns correct area for a small rectangle" do
      r = Rectangle.new(5, 2)
      expect( r.area ).to eq(10)
    end
  end
end

describe "Square" do
  describe "initialize" do
    it "only takes a side and color" do
      s = Square.new(5, "Green")
      expect( s.width ).to eq(5)
      expect( s.height ).to eq(5)
      expect( s.color ).to eq("Green")
    end
    it "sets a default color" do
      s = Square.new(13)
      expect( s.width ).to eq(13)
      expect( s.height ).to eq(13)
      expect( s.color ).to eq("Red")
    end
  end
  describe "area" do
    it "returns right area" do
      s = Square.new(15)
      expect( s.area ).to eq(225)
    end
  end
end

describe "Circle" do
  describe "initialize" do
    it "only takes radius and color" do
      c = Circle.new(7, "Brown")
      expect( c.radius ).to eq(7)
      expect( c.color ).to eq("Brown")
    end
    it "sets a default color" do
      c = Circle.new(8)
      expect( c.radius ).to eq(8)
      expect( c.color ).to eq("Red")
    end
    it "does not respond to width or height" do
      c = Circle.new(8)
      expect( c.respond_to?(:width) ).to eq(false)
      expect( c.respond_to?(:width=) ).to eq(false)
      expect( c.respond_to?(:height) ).to eq(false)
      expect( c.respond_to?(:height=) ).to eq(false)
    end
  end

  describe "area" do
    it "returns the area of a small circle" do
      c = Circle.new(3)
      expect( c.area ).to eq(28.274333882308138)
    end
    it "returns the area of a large circle" do
      c = Circle.new(23)
      expect( c.area ).to eq(1661.9025137490005)
    end
  end
end
