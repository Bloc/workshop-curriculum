class RPNCalculator
  @rpn

  def initialize
    @rpn = []
  end

  def push(num)
    @rpn << num
  end

  def plus
    value1 = @rpn.pop
    value2 = @rpn.pop
    @rpn << value2 + value1
  end

  def minus
    value1 = @rpn.pop
    value2 = @rpn.pop
    @rpn << value2 - value1
  end

  def times
    value1 = @rpn.pop
    value2 = @rpn.pop
    @rpn << value2 * value1
  end

  def divide
    value1 = @rpn.pop
    value2 = @rpn.pop
    @rpn << value2.to_f / value1.to_f
  end

  def value
    @rpn.last
  end
end
