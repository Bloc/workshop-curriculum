def odd_or_even(arg)
  case arg.length % 2
  when 0
    "even"
  else
    "odd"
  end
end
