var sumsquare = 0;
var squaresum = 0;
var count = 1;

var square = function(number) {
	return number*number;
};

var sqhundred = function() {
	while (count < 101) {
		sumsquare += square(count);
		count++;
	}
};



var hundredsq = function() {
	while (count !== 0) {
		squaresum += count;
		count--;
	}
};

sqhundred();
count = 100
hundredsq();
console.log(square(squaresum) - sumsquare);