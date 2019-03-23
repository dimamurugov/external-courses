function typeOfValue(a) {
	if(isNaN(a)) return undefined;
	switch (typeof a) {
		case 'number':
			return 'number'; 
		case 'string':
			return 'string';
		default:	
			return undefined;	
	} 		
}
module.exports = TypeOfValue;