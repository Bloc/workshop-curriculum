def multiply_the_odds(arr)
  if arr.empty?
    0
  else
    product = 1
    arr.each_with_index do |e, i|
      if i % 2 != 0
        product *= e
      end
    end
    product
  end
end
