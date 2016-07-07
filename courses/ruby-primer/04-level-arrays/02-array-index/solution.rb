def odd_or_even_array(arr)
  return_arr = []
  if arr.length == 1
    arr
  elsif arr.length % 2 == 0
    return_arr << arr.first
    return_arr << arr.last
  else
    return_arr << arr.first
    return_arr << arr[((arr.length-1)/2)]
    return_arr << arr.last
  end
end
