function NewDeepObj(obj) {
	var temp = (obj instanceof Array) ? [] : {};
	for (var key in obj) {
		if (typeof obj[key] === 'object') { 
			temp[key] = NewDeepObj(obj[key]);
		} else {temp[key] = obj[key]}
	}	
	return temp;
} 
module.exports = NewDeepObj;