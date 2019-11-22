//Logic Challenge - X dan O
console.log('Logic Challenge - X dan O')
function xo(str) {
	var compare = 0;
	for (let i = 0; i<str.length; i++) {		
		if (str[i]=='x') {
		compare = compare +1;
		}
		else if (str[i]=='o') {
		compare = compare -1;
		}	
	}
	if (compare==0) {return true;}
	else {return false;}
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true

