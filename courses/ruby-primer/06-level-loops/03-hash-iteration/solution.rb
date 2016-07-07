def hash_to_array(h = {})
  if h.empty?
    "no pizza?"
  else
    a = []
    h.each do |k, v|
      a << "#{k} is #{v}"
    end
    a
  end
end
