class Book
  def set_title(title)
    @title = title
  end

  def set_author(author)
    @author = author
  end

  def description
    "#{@title} was written by #{@author}"
  end
end
