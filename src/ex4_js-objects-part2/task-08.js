function strChangeCamelCase(str) {
	temp = str.split(' ');
	for (var i = 0; i < temp.length; i++) {
		temp[i] = temp[i].toLowerCase();
		if (i !== 0) {
				temp[i] = temp[i][0].toUpperCase() + temp[i].slice(1);
		};
	};
	return temp.join("");
}
module.exports = strChangeCamelCase;
