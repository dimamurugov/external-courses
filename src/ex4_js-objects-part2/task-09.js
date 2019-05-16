function toInsertRow(str,str1,Num) {
	var temp = str.split(" ");
	temp.splice((temp.length - Num), 0, str1);
	return temp.join(" ");
}

module.exports = toInsertRow;
