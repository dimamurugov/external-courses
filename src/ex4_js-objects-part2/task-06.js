function zoomFirstLetters(str) {
	var str1 = "";
	if (typeof str[0] === 'string') {
		str1 = str1 + str[0].toUpperCase();
	};
	for (var i = 1; i < str.length; i++) {

		if ((str[i-1] == " ") && (typeof str[i] == 'string')) {
			str1 = str1 + str[i].toUpperCase();
		} else {
			str1 = str1 + str[i];
		};
  }
	return str1
}
module.exports = zoomFirstLetters;
