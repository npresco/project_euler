var divisible = [];
var x = 1;

var div = function(number) {
	if (number % 2 === 0 && number % 3 === 0 && number % 4 === 0 && number % 5 === 0 && number % 6 === 0 && number % 7 === 0 && number % 8 === 0 && number % 9 === 0 && number % 10 === 0 && number % 11 === 0 && number % 12 === 0 && number % 13 === 0 && number % 14 === 0 && number % 15 === 0 && number % 16 === 0 && number % 17 === 0 && number % 18 === 0 && number % 19 === 0 && number % 20 === 0) {
		divisible.push(number);
	} 
};

while (divisible.length === 0) {
	div(x);
	x++;
}

console.log(divisible);