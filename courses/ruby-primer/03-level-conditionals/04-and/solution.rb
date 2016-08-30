def mix_the_colors(red, yellow, blue)
  if red && yellow && blue
    "Black"
  elsif red && yellow
    "Orange"
  elsif red && blue
    "Violet"
  elsif yellow && blue
    "Green"
  elsif red
    "Red"
  elsif blue
    "Blue"
  elsif yellow
    "Yellow"
  else
    "None"
  end
end
