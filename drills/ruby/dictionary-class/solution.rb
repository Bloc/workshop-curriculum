class Dictionary
  # initialize with an empty hash
  def initialize
    @dictionary = {}
  end

  # return hash as is
  def entries
    @dictionary
  end

  # return key words sorted
  def keywords
    @dictionary.keys.sort
  end

  # add a word, either a string or hash
  def add(word = {})
    if word.class == Hash
      @dictionary.merge!(word)
    else
      @dictionary[word] = nil
    end
  end
