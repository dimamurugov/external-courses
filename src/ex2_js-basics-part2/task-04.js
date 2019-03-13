function Mass(arr){
	for(var i = 0; i < arr.length; i++){
		if (arr[0] !== arr[i]) {return false;} 
	}	
	return true;
};
module.exports = Mass;