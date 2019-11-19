//Looping
//1. Menyusun Barisan Bintang
console.log('1. Menyusun Barisan Bintang');
var row1=5;
for (let i=0; i<row1; i++) {
	console.log('*')
}
console.log('');

//2. Menyusun Barisan Bintang Dengan Nested Looping
console.log('2. Menyusun Barisan Bintang Dengan Nested Looping');
var rows2 = 5;
for (let i=0; i<rows2; i++) {
	var a='';
	for (let i=0; i<rows2; i++) {
	a+='*';
	}
	console.log(a);
}
console.log('');

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
console.log('3. Menyusun Barisan Tangga Bintang Dengan Nested Looping');
var rows3 = 5;
var b='';
for (let i=0; i<rows3; i++) {
	var b=b+'*';
	console.log(b);
}
