class Apple
  attr_accessor :ripe

  def initialize(ripe)
    @ripe = ripe
  end

  def tasty?
    if ripe
      "Yes"
    else
      "Not yet"
    end
  end
end

class Fuji < Apple
  def flavor
    if ripe
      "Sweet"
    else
      "Tart!"
    end
  end

  def color
    if ripe
      "Yellowish red"
    else
      "Green"
    end
  end
end
