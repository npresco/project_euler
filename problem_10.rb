def prime?(number)
  @divisor = 2
  not_divided = true
  answer = true
  while not_divided && @divisor < number
    remainder = number % @divisor
    if remainder.zero?
      not_divided = false
      answer = false
    else
      @divisor += 1
    end
  end
  answer
end

@primes = []
@i = 2
while @i < 2_000_000
  @primes << @i if prime?(@i)
  @i += 1
end

puts @primes.inject(&:+)
