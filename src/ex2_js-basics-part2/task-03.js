function Mass(arr){
	var arr1 = [0,0,0];
	for(var i = 0; i < arr.length; i++){
		if ( arr[i] == 0 ) {arr1[2] = arr1[2] + 1}
		else {
			if ( arr[i]/2 == 0 ) {arr1[0] = arr1[0] + 1}
			else {arr1[2] = arr1[1] + 1};
		};
	};
	
	console.log(arr1);	
};
module.exports = Mass;