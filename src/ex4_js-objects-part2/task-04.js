function upFirstRegister(str) {
	var temp;
	temp = str[0].toUpperCase() + str.slice(1);
	return temp;
}
module.exports = upFirstRegister;
