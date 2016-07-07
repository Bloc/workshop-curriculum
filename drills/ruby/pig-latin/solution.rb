def translate(word)
  # split the word up into each character
  letters = word.split('')
  # we want to move the consonants to the end
  while !(%w{a e i o u}.include? letters[0])
    letters << letters.shift
    # special case: letter we just shifted was a q and first is u
    # then shift it too
    if letters.last == "q" && letters.first == "u"
      letters << letters.shift
    end
  end
  letters.join + "ay"
end
