def fix_title(title)
  not_capitalized = %w{a and the of}

  word_array = title.downcase.split(" ")
  title_array = []

  word_array.each_with_index do |word, index|
    if index == 0 || !not_capitalized.include?(word)
      title_array << word.capitalize
    else
      title_array << word
    end
  end

  title_array.join(" ")
end
