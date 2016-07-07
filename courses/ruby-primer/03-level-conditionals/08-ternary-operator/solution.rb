def odd_or_even(arg1, arg2)
  sum_length = arg1.length + arg2.length
  sum_length % 2 == 0 ? "even" : "odd"
end
