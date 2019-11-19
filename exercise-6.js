//Looping
//1. Melakukan Looping Menggunakan While
console.log('1. Melakukan Looping Menggunakan While');
console.log('LOOPING PERTAMA');
var pertama = 20;
var p = 1;
while (p<pertama+1) {
	if (p%2==0) {
	console.log(p+' - I love coding');
	}
	else {};
	p++;
}
console.log('LOOPING KEDUA');
var kedua = 20;
var k = 1;
while (kedua>k) {
	if (kedua%2==0) {
	console.log(kedua+' - I will become fullstack developer');
	}
	else {};
	kedua--;
}
console.log('');

//2. Melakukan Looping Menggunakan For
console.log('2. Melakukan Looping Menggunakan For');
console.log('LOOPING PERTAMA');
var for1 = 20;
for(let i = 1; i<for1+1; i++) {
	console.log(i+' - I love coding');
}
console.log('LOOPING KEDUA');
var for2 = 20;
for(let i = for2; i>0; i--) {
	console.log(i+' - I will become fullstack developer');
}
console.log('');

//3. Angka Ganjil dan Genap
console.log('3. Angka Ganjil dan Genap');
console.log('<---------------PART 1--------------->');
var satu = 100;
for (let i=1; i<satu+1; i++) {
	if (i%2==0) {
		console.log('"GENAP"')
	}
	else{
		console.log('"GANJIL"')
	}
}
console.log('<---------------PART 2--------------->');
var satu = 100;
for (let i=1; i<satu+1; i+=2) {
	if (i%3==0) {
		console.log(i+' KELIPATAN 3')
	}
	else{
		console.log('""')
	}
}
console.log('<---------------PART 3--------------->');
var satu = 100;
for (let i=1; i<satu+1; i+=5) {
	
	if (i%6==0) {
		console.log(i+' KELIPATAN 6')
	}
	else{
		console.log('""')
	}
}
console.log('<---------------PART 4--------------->');
var satu = 100;
for (let i=1; i<satu+1; i+=9) {
	
	if (i%10==0) {
		console.log(i+' KELIPATAN 10')
	}
	else{
		console.log('""')
	}
}
