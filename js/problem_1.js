userNumber = 999;
sum = 0;
var divNums = [];

var divTest = function(userNumber) {
    while (userNumber > 0) {
        if (userNumber % 3 === 0 ) {
           divNums.push(userNumber);
        }
        else if (userNumber % 5 === 0 ) {
           divNums.push(userNumber);
        }
        userNumber--;
    }
};

divTest(userNumber);
for (var i = 0; i < divNums.length; i++) {
    sum += divNums[i];
}
console.log(sum)