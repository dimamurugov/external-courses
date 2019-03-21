function stringWithoutSpaces(str) { 
	var str1 = "";
	for (var i = 1; i < str.length - 1; i++) {
		str1 = str1 + str[i];
	}
	return str1;
} 
module.exports = stringWithoutSpaces;