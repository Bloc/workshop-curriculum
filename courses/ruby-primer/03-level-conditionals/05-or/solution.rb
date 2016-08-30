def is_adult?(age)
  return age > 5 && age < 65
end

def perform_search?(age, random_pat_down)
  is_adult?(age) || random_pat_down
end