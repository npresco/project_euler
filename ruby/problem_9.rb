squares = []
possibles = []
i = 1
while i < 500
  squares << [(i * i), i]
  i += 1
end

squares.each do |a|
  squares.each do |b|
    squares.each do |c|
      if a[0] + b[0] == c[0] && a[1] + b[1] + c[1] == 1000
        possibles << [a[1] * b[1] * c[1]]
      end
    end
  end
end

puts possibles.first
