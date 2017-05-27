@primes = [2, 3, 5, 7, 11, 13]
@count = 14

class Fixnum
  def divisible?
    n = self - 1
    look = true
    answer = true
    while look
      if n > 1 && (self % n).zero?
        look = false
      elsif n > 1 && !(self % n).zero?
        n -= 1
      else
        answer = false
        look = false
      end
    end
    answer
  end
end

while @primes.length < 8
  if @count.divisible?
    @count + 1
  else
    @primes << count
    @count + 1
  end
end

puts @primes.last
