//Pseudocode Challenge

//1. Newton Second Law
var m = 600
var a = 2
var ΣF = m * a
console.log(`hasil ΣF adalah ${ΣF}`)

//2. Tahun Kabisat
var tahun = 1500
if (tahun%4 == 0 && tahun%100 != 0) {
	console.log(`tahun ${tahun} adalah tahun kabisat`)
}
else if (tahun%4 == 0 && tahun%100 == 0 && tahun%400 == 0) {
	console.log(`tahun ${tahun} adalah tahun kabisat`)
}
else { console.log(`tahun ${tahun} bukan tahun kabisat`)}

//3. Laundry Day
var totalBaju = 20 
var bajuDidalamMesin = 0
while (totalBaju != bajuDidalamMesin) {
	bajuDidalamMesin = bajuDidalamMesin + 1
	console.log(`baju di dalam mesin cuci berjumlah ${bajuDidalamMesin} buah`)
}
console.log('jawaban soal ke 4')
//4. Periksa Kuku
var dataKuku = [['kukupanjang'],['kukupendek'],['kukupanjang'],['kukupanjang'],['kukupanjang'],['kukupanjang'],['kukupanjang'],['kukupanjang'],['kukupanjang'],['kukupanjang'],['kukupanjang'],['kukupanjang'],['kukupanjang'],['kukupanjang'],['kukupanjang'],['kukupanjang'],['kukupanjang'],['kukupanjang'],['kukupanjang'],['kukupanjang'],['kukupanjang'],['kukupanjang'],['kukupanjang'],['kukupanjang'],['kukupanjang'],['kukupanjang'],['kukupanjang'],['kukupanjang'],['kukupanjang'],['kukupanjang'],['kukupanjang'],['kukupendek'],['kukupanjang'],['kukupanjang'],['kukupanjang'],['kukupanjang'],['kukupanjang'],['kukupendek'],['kukupanjang'],['kukupendek']]
var jumlahMurid = 40
var sudahDiperiksa = 0
while (jumlahMurid != sudahDiperiksa) {
	if (dataKuku[sudahDiperiksa]=='kukupanjang') {
		console.log('Silahkan berdiri di depan kelas')
		sudahDiperiksa = sudahDiperiksa + 1
	}
	else {
		console.log('Selamat anda lulus sensor')
		sudahDiperiksa = sudahDiperiksa + 1
	}
}






