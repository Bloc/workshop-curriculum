class Die
  @sides

  def initialize(sides = 0)
    @sides = sides
  end

  def sides
    @sides
  end

  def roll
    rand(@sides) + 1
  end
end
