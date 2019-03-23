function CutStr(str, Num) {
 	if (str.length > Num) {
 		var str1 = "";
 		for (var i = 0; i < Num-3; i++) {
 				str1 = str1 + str[i];
 		}
 		str1 = str1 + "...";
		return str1;
 	}
	return str;
}

module.exports = upFirstRegister;  
