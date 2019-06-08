var number = 600851475143;
var count = 1;
var odds = [];
var primes = [];

var div = function(number) {
	while (number !== count) {
		if (number % (number - count) === 0)  {
			odds.push(number-count);
		}
	count+=1;
	}
count = 1;
};

var simdiv = function(number) {
	if (number % 2 === 0 || number % 3 === 0 || number % 4 === 0 || number % 5 === 0 || number % 6 === 0 || number % 7 === 0 || number % 8 === 0 || number % 9 === 0) {
	primes.push(number-count);
	}
};

var div2 = function(number) {
	while (number !== count) {
		if (number % (number - count) === 0)  {
			primes.push(number-count);
		}
	count+=1;
	}
count = 1;
};

div(number);

for (var j = 0; j < odds.length; j++) {
	simdiv(odds[0]);	
		if (primes.length >= 1) {
			odds.shift();
	}
}

primes = [];

while (primes.length === 0) {
	div2(odds[0]);	
		if (primes.length >= 2) {
			primes = [];
			odds.shift();
		}
		else {
			console.log(odds[0]);
		}
}