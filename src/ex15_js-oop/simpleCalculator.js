function SimpleCalculator(name) {
  Calculator.apply(this, arguments);
}

SimpleCalculator.prototype = Object.create(Calculator.prototype);
SimpleCalculator.prototype.constructor = SimpleCalculator;

SimpleCalculator.prototype.add = function(num) {
        if (this.__isNumeric(num)) {
            this.__result += num;
        }
        return this;
    };

SimpleCalculator.prototype.subtract = function(num) {
        if (this.__isNumeric(num)) {
            this.__result -= num;
        }
        return this;
    };

SimpleCalculator.prototype.multiply = function(num) {
        if (this.__isNumeric(num)) {
            this.__result *= num;
        }
        return this;
    };

SimpleCalculator.prototype.divide = function(num) {
        if (this.__isNumeric(num)) {
            this.__result /= num;
        }
        return this;
    };
var calculatorSimple = new SimpleCalculator("Обычный калькулятор");
var resultCalculater = calculatorSimple.add(100)
    .multiply(2)
    .divide(20)
    .reset()
    .subtract(1)
    .getResult();

    console.log("Обычный калькултор:");
    console.log(resultCalculater);

    calculatorSimple.setState(1);
    console.log(calculatorSimple.getResult());

    calculatorSimple.reset();
    console.log(calculatorSimple.getResult());
