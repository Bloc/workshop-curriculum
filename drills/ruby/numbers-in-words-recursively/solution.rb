module InWords

  def in_words
    # recursion steps
    # 573_917_408.in_words.should ==
    # "(five hundred seventy three) million
    # (nine hundred seventeen) thousand
    # (four hundred)
    # eight"
    num = []

    # BASE CASE (stops being recursive)
    if self < 1000
      h = self - (self%100)
      t = self - h - (self%10)
      o = self - h - t - (self%1)

      # puts "#{self} h:#{h} t:#{t} o:#{o}"


      if h > 0
        # 100-900 - all hundred-digits are the same
        num << (%w{one two three four five six seven eight nine}[h/100 - 1] + " hundred")
      end

      if t >= 20
        # 20-90 - all ten-digits are the same
        num << %w{twenty thirty forty fifty sixty seventy eighty ninety}[t/10 - 2]
      end

      if (t+o) < 20
        # 1-19 - all unqiue, need to just look up
        num << %w{one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen}[(t+o) -1] unless t == 0 && o == 0
      else
        # 1-9
        num << %w{one two three four five six seven eight nine}[o -1] unless o == 0
      end

      # puts num.join(" ")
    else
      # self = 573917408
      digits = self.to_s.split('')
      # digits = [5,7,3,9,1,7,4,0,8]
      a = digits.pop(3).join('').to_i
      num << (a.in_words) if a > 0

      if digits.length > 0
        b = digits.pop(3).join('').to_i
        num << (b.in_words + " thousand") if b > 0
      end

      if digits.length > 0
        b = digits.pop(3).join('').to_i
        num << (b.in_words + " million") if b > 0
      end

      if digits.length > 0
        b = digits.pop(3).join('').to_i
        num << (b.in_words + " billion") if b > 0
      end

      if digits.length > 0
        b = digits.pop(3).join('').to_i
        num << (b.in_words + " trillion") if b > 0
      end

      num << (digits.pop(3).join('').to_i.in_words + " billion") if digits.length > 0
      num << (digits.pop(3).join('').to_i.in_words + " trillion") if digits.length > 0
      num.reverse!
    end

    num.join(" ") #.strip
  end
