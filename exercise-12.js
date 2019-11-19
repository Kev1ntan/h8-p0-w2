//Logic Challenge - Konversi Menit
function konversiMenit(menit) {
	var detik = '0'+((menit%60).toString());
	if (detik.length == 2) {
		var dua = detik;
		return Math.ceil(menit/60)+':'+dua;
	}
	else {
		var tiga = detik[1]+detik[2];
		return Math.ceil(menit/60)+':'+tiga;
	}
}
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
