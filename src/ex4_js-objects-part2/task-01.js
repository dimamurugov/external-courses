var obj = {a:1};
var obj1 = Object.create(obj);
obj1.b = 2;

function searchInProto(Param, obj) {
	var temp = {};
	if (!obj.hasOwnProperty(Param)) {
		temp[Param] = obj[Param];
		return temp[Param];
	}
	return undefined;
} 
module.exports = searchInProto;