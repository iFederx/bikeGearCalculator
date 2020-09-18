console.log('Hello World!');

let coronaGrande: number[] = [50, 34];
let velocita: number[] = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]

interface sviluppo {
	corona: number;
	velocita: number;
	prodotto: number;
}

let sviluppi: sviluppo[] = [];

coronaGrande.forEach((c) => {
	velocita.forEach((v) => {
		let s = {
			corona: c,
			velocita: v,
			prodotto: c*v
		}
		sviluppi.push(s);
	});
});

console.log('Sviluppi:\n', sviluppi);
console.log('\nSviluppi ordinati:\n', sviluppi.sort((a, b) => {
	return a.prodotto - b.prodotto;
}));