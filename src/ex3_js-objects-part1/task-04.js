function SearchAndAdd_Prop(str, obj) {
	var temp = obj;
	if (!(str in temp)) temp[str] = "new";
	return temp;
};


module.exports = SearchAndAdd_Prop;
