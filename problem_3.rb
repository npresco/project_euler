@primes = []

def div (num)
	@i = 2
	while (@i < num) do
		if (num % @i == 0)
			@fac = @i
			div(@fac)
			@primes.push(@fac)
			@i = @i +1
		else 
			@i = @i +1
		end
	end
end

div(600851475143)
puts @primes.sort[-1]