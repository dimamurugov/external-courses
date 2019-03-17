function ObjOut(object) {
	for (var key in object) {
		console.log(key + ": " + object[key]);
	};
};
module.exports = ObjOut