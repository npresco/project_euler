var n = 1;
var m = 2;
var c = 0;
var sum = 0;
var fibarray = [];
var fib = function(c) {
	while (n < 4000000) {
		fibarray.push(n);
		c = m + n;
		n = m;
		m = c
		;
	}
};

fib(c);

var even = function(fibarray) {
	for (var i = 0; i < fibarray.length; i++) {
		if (fibarray[i] % 2 === 0) {
			sum += fibarray[i];
		}
	}
};

even(fibarray);
 console.log(sum);


