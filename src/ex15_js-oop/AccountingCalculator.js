function AccountingCalculator(name) {
     Calculator.apply(this, arguments);
}

AccountingCalculator.prototype = Object.create(Calculator.prototype);
AccountingCalculator.prototype.constructor = AccountingCalculator;

AccountingCalculator.prototype.round = function(value) {
    if (this.__isNumeric(value)) {
        this.__result = +value.toFixed(3);
    }

     return this;
};


var accountCal = new AccountingCalculator("Бухгалтерский калькулятор");

accountCal.round(1.1234567);
console.log("Бухгалтерский калькултор:");
console.log(accountCal.getResult());
