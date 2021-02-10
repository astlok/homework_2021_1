'use strict'

function zip() {
	let result = {};
  	for (let i = 0; i < arguments.length; i++) {
 	 	for (let arg in arguments[i]) {
 	 		if (!(arg in result)) {
 	 			result[arg] = arguments[i][arg];
 	 		} 		
 	 	}
 	}
 	return result;
}
