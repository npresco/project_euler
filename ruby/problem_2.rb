@a = 1
@b = 1
@c = 0
@fibs = []

def fibonacci ()
	while (@c <= 4000000)
		@c = @a + @b
		if (@c.even?)
			@fibs.push(@c)
		end
		@a = @b
		@b = @c
	end
end

fibonacci()
puts @fibs.inject(:+)
