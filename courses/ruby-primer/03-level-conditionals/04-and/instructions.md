### Exercise

Today you are going to mix primary colors! When primary colors mix, they form secondary colors.

![Primary Color Venn Diagram](http://questgarden.com/178/79/5/150211104447/images/primarycolors.gif "Primary Color Venn Diagram")

1. Define a method named `mix_the_colors`.
2. It should have three boolean arguments:
  - red, yellow, and blue (in that order)
3. Use the diagram to return the color value based on which colors are present in the mix.
- You can return one of, "None," "Red," "Yellow," "Blue," "Orange," "Violet," "Green," or "Black."

In use:

```ruby
puts mix_the_colors(false, false, false)
=> "None"

puts mix_the_colors(true, true, false)
=> "Orange"

puts mix_the_colors(false, true, false)
=> "Yellow"

puts mix_the_colors(true, true, true)
=> "Black"
```
