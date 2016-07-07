class Fixnum
  def factorial
    if self < 0
      :invalid
    elsif self == 0
      1
    else
      self * (self - 1).factorial
    end
  end
end
