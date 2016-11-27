def pythagorean_theorem(a, b, c)
  if a == 0
    ((c ** 2) - (b ** 2)) ** 0.5
  elsif b == 0
    ((c ** 2) - (a ** 2)) ** 0.5
  else
    ((a ** 2) + (b ** 2)) ** 0.5
  end
end