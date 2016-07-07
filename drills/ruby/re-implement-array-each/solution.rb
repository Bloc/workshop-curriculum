class Array
  def new_each
    0.upto(self.length - 1) do |index|
      yield self[index]
    end
  end
end
