def calculate_interest(principal, rate, years)
  return principal unless rate > 0 && years >= 1
  principal * (1 + rate * years)
end