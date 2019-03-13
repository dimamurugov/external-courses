
 function TypeOfValue(a) {
	
	switch (typeof a) {
		case 'number':
			return 'number'; 
		case 'string':
			return 'string';
		default:	
			return undefined;	
	} 
	//return 'Undefined';	
}
module.exports = TypeOfValue;