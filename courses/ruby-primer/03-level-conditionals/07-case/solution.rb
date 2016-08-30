def calculate_taxes(income)
  tax_percentage = 0
  case income
  when 0...12000 then tax_percentage = 0
  when 12000...25000 then tax_percentage = 0.05
  when 25000...50000 then tax_percentage = 0.08
  when 50000...100000 then tax_percentage = 0.105
  when 100000...250000 then tax_percentage = 0.15
  else tax_percentage = 0.19
  end
  income * tax_percentage
end
