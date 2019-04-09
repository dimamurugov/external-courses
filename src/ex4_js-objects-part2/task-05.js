function searchStrInStr(str, str1) {
	flag = true;
	j = 0;
	for(var i = 0; i < str.length-1; i++) {
		if (str[i] === str1[j]) {
			flag = true;
			j++;
			if (j > str1.length-1) return flag;
		} else {
			flag = false;
			j = 0;
		}
	}
	return flag;
} 
module.exports = upFirstRegister
