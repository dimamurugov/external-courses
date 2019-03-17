function Prop_Search(str, obj) {
	for (var key in obj) {
		if (key == str) return true;
	};
	return false;
};
module.exports = Prop_Search