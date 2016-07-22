#
# 1
#
# refactor these `if` statements into `unless` statements
def calculate_interest(principal, rate, years)
  if years < 1
    return principal
  elsif rate == 0
    return principal
  end
  principal * (1 + rate * years)
end