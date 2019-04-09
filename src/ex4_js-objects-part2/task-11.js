function toSearchForReps(str) {
	var temp = {};
	temp[str[0]] = 1;
	for (var i = 0; i < str.length; i++) {
		for(var j in temp) {
			if (j == str[i]) {
				temp[j] = temp[j] + 1;
			} else temp[str[i]] = 1;
		}
	}
	for(var key in temp) {
		console.log(key + " " + temp[key]);
	}
	return temp;
}

module.exports = toSearchForReps;
