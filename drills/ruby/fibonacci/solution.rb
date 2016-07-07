class Fixnum
  def fibonacci
    if self < 2
      self
    else
      (self - 1).fibonacci + (self - 2).fibonacci
    end
  end
end
