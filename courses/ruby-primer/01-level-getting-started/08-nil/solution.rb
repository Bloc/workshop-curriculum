def which_hand?(left, right)
  return "You're cheating!" if left.nil? && right.nil?
  return nil if left && right
  left.nil? ? right : left
end
