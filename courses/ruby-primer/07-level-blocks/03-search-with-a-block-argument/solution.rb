def any_strings_or_numbers?(array)
  array.any? { |item| item.is_a?(String) || item.is_a?(Numeric) }
end
