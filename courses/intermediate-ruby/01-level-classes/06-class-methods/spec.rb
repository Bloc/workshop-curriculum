describe "Car" do
  describe "initialize" do
    it "takes make, model and year" do
      new_car = Car.new("Acura", "Integra", 1998)
      expect( new_car.make ).to eq("Acura")
      expect( new_car.model ).to eq("Integra")
      expect( new_car.year ).to eq(1998)
    end
  end
  describe "wheels" do
    it "returns a standard number of wheels for any car" do
      expect( Car.wheels ).to eq(4)
    end
  end
  describe "axles" do
    it "returns a standard number of axles for any car" do
      expect( Car.axles ).to eq(2)
    end
  end
end
