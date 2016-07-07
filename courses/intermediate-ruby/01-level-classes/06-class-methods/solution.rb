class Car
  attr_accessor :make, :model, :year

  def self.wheels
    4
  end

  def self.axles
    2
  end

  def initialize(make, model, year)
    @make, @model, @year = make, model, year
  end
end
