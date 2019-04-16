 function NewObj(obj) {
	var temp = {};
	for (var key in obj) {
		temp[key] = obj[key];
	};	
	return temp;
}; 

module.exports = NewObj;