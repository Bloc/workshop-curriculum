class Array
  def new_collect
    a = []
    self.each {|e| a << yield(e) }
    a
  end
end
