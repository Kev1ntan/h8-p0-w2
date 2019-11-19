//Looping
//1. Melakukan Looping Menggunakan While
var pertama = 20;
var p = 1;
console.log('LOOPING PERTAMA');
while (p<pertama+1) {
	if (p%2==0) {
	console.log(p+' - I love coding');
	}
	else {};
	p++;
}

var kedua = 20;
var k = 1;
console.log('LOOPING KEDUA');
while (kedua>k) {
	if (kedua%2==0) {
	console.log(kedua+' - I will become fullstack developer');
	}
	else {};
	kedua--;
}


//2. Melakukan Looping Menggunakan For
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

//3. Angka Ganjil dan Genap
var satu = 100;
for (let i=1; i<satu+1; i++) {
	
	if (i%2==0) {
		console.log('GENAP')
	}
	else{
		console.log('GANJIL')
	}
}

var satu = 100;
for (let i=1; i<satu+1; i+=2) {
	
	if (i%3==0) {
		console.log(i+' KELIPATAN 3')
	}
	else{
		console.log('')
	}
}


var satu = 100;
for (let i=1; i<satu+1; i+=5) {
	
	if (i%6==0) {
		console.log(i+' KELIPATAN 6')
	}
	else{
		console.log('')
	}
}

var satu = 100;
for (let i=1; i<satu+1; i+=9) {
	
	if (i%10==0) {
		console.log(i+' KELIPATAN 10')
	}
	else{
		console.log('')
	}
}
