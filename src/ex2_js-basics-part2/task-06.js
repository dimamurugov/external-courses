function CompositeNumber(a){
	if (a > 1000) {return 'Не верные данные'};
	for(var i = 2; i <= a/2; i++){
		if ( (a%i) === 0) {return 'Число: ' + a +' Составное'}; 
	}	
	return 'Число: ' + a + ' не составное';
};
module.exports = TypeOfValue;