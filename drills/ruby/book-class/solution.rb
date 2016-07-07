class Book
  def title=(new_title)
    @book = new_title
  end
  def title
    namelower=@book.downcase
    result = namelower.titleize
    result = result.gsub(" In "," in ")
    result = result.gsub(" A "," a ")
    result = result.gsub(" The "," the ")
    result = result.gsub(" An "," an ")
    result = result.gsub(" And "," and ")
    result
  end
end
