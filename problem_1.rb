@multiples = []

def mult(num, x, y)
	while (num > 0)	
		if (num % x == 0 || num % y == 0)
			@multiples.push(num)
			num = num - 1
		else
			num = num - 1
		end
	end
end

mult(999, 3, 5)
puts @multiples.inject(:+)