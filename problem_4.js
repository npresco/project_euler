var rev = function(num) {
	return parseInt(num.toString().split("").reverse().join(""));
};


var palCheck = function(num) {
 var rnum = rev(num);
	if (num === rnum) {
		return true;
	}
	else {
		return false;
	}
};

function getMaxOfArray (palindrome) {
	return Math.max.apply(null, palindrome)
}

var x = 999;
var y = 999;
var palindrome = [];

while (x > 99) {
	if (y > 99) {
		if (palCheck(x*y)) {
			palindrome.push(x*y);
			y--; 
		}
		else {
			y--;
		}
	}
	else {
		y = 999;
		x--;
	}	
}

console.log(getMaxOfArray(palindrome));