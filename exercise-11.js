//Logic Challenge - Balik Kata
console.log('Logic Challenge - Balik Kata')
function balikKata(kata) {
	var string = kata;
	var a = '';
	for (let i = kata.length; i>0; i--)	{	
		a = a + kata[i-1];
	}
	return a;
}

// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS