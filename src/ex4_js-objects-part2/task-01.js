var obj = {a:1};
var obj1 = Object.create(obj);
obj1.b = 2;

function searchInProto(Param, obj) {
	if (!obj.hasOwnProperty(Param)) {
		return obj[Param];
	}
	return undefined;
} 
module.exports = searchInProto;