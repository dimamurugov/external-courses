var result = 0;
var Calculator = function() {};

Calculator.getResult = function() {
	return result
};
Calculator.add = function(value) {
	if (typeof value !== 'undefined') {result += value;}
			return Calculator.add
};
Calculator.subtract = function(value) {
	if (typeof value !== 'undefined') {result -= value;}
			return Calculator.subtract
};
Calculator.divide= function(value) {
	if (typeof value !== 'undefined') {result /= value;}
			return Calculator.divide
};
Calculator.multiply= function(value) {
	if (typeof value !== 'undefined') {result *= value;}
			return Calculator.multiply
};
Calculator.reset = function() {
			result = 0;
			return 
};

module.exports = Calculator;
