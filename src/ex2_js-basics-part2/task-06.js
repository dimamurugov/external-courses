function searchCompositeNumber(value){
	var str = 'Число ' + value + ' - простое число';
	if (value >= 1000 || value === 0 || value === 1) {return 'Данные неверны'};
	for(var i = 2; i <= value/2; i++) {
		if ( (value%i) === 0 ) {
			str = 'Число ' + value + ' - составное число';
			break;
		}
	}	
	return str;
};
module.exports = searchCompositeNumber;