class Fixnum
  def fibonacci
    a, b = 0, 1
    return self if self < 2
    2.upto(self) do |i|
      a, b = b, a+b
    end
    b
  end
end
