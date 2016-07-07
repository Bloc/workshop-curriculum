module InWords
  SMALL_NUMBERS = %w{zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen}
  TENS = %w{zero ten twenty thirty forty fifty sixty seventy eighty ninety}

  def in_words
    # convert to string to easily grab digits
    self_string = self.to_s
    # for the digits that don't exist they will be nil
    #   nil.to_i = 0
    h = self_string[-3].to_i
    t = self_string[-2].to_i
    o = self_string[-1].to_i

    words = []

    # hundred
    words << SMALL_NUMBERS[h.to_i] + " hundred" if h != 0

    # teens
    if t == 1
      words << SMALL_NUMBERS[self_string[-2..-1].to_i]
    # non-teen
    else
      words << TENS[t] if t != 0
      words << SMALL_NUMBERS[o.to_i] if o != 0
    end

    words.join(" ")
  end
end

class Fixnum
  include InWords
end
