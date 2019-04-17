function Calculator() {};

Calculator.result = 0;

Calculator.getResult = function() {
	return Calculator.result
};
Calculator.add = function(value) {
	if (typeof value !== 'undefined') {Calculator.result += value;}
			return Calculator.add
};
Calculator.subtract = function(value) {
	if (typeof value !== 'undefined') {Calculator.result -= value;}
			return Calculator.subtract
};
Calculator.divide= function(value) {
	if (typeof value !== 'undefined') {Calculator.result /= value;}
			return Calculator.divide
};
Calculator.multiply= function(value) {
	if (typeof value !== 'undefined') {Calculator.result *= value;}
			return Calculator.multiply
};
Calculator.reset = function() {
			Calculator.result = 0;
};


module.exports = Calculator;
