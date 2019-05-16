function mySlice(arr,begin,end) {
	var result, j, stary, finish;
	result = [];
	j = 0;
  start = begin;
  finish = end;
	if (((begin >= 0) || (begin === undefined)) && ((end >= 0) || (end === undefined))) {
    if (typeof begin === 'undefined') {
			start = 0;
		};
		if (typeof end === 'undefined') {
			finish = arr.length;
		};
		for (var i = start; i < finish; i++) {
				result[j] = arr[i];
				j++;
		};
	} else {
		if (typeof end === 'undefined') {
			finish = arr.length*(-1);
		};
		if (typeof begin === 'undefined') {
			start = arr.length;
		};
		for (var k = arr.length + start; k < arr.length + finish; k++) {
			result[j] = arr[k];
			j++;
		}
	};
	return result
}

module.exports = mySlice
