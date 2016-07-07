def add(a, b)
  output(a, b, a + b, "sum")
end

def subtract(a,b)
  output(a, b, a - b, "difference")
end

def multiply(a, b)
  output(a, b, a * b, "product")
end

def divide(a,b)
  output(a, b, a.to_f/b.to_f, "quotient")
end

def output(a, b, result, operator)
  "The #{operator} of #{a} and #{b} is #{result}."
end
