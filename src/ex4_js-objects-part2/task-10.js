function toFlipString(str) {
	var str1 = str.split('');
	str1.reverse();
	return str1.join("");
}
module.exports = toFlipString;
