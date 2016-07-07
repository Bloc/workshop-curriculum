class Fixnum
  def factorial
    if self < 0
      raise "You can't take the factorial of a negative number."
    elsif self == 0
      1
    else
      self * (self - 1).factorial
    end
  end
end
