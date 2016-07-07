class Array
  def new_count(&block)
    block ? self.select(&block).length : self.length
  end
end
