function Calculator(name) {
  this.__name = name;
    this.__result = 0;

}
 Calculator.prototype.__isNumeric = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

 Calculator.prototype.reset = function() {
    this.__result = 0;
    return this;
};

 Calculator.prototype.getResult = function() {
    return this.__result;
};
 Calculator.prototype.setState = function(value) {
    if(this.__isNumeric(value)) {
        this.__result = value;
    }
     return this;
};
