let corone: number[] = [50, 34];
console.log('Corona grande', corone);
let velocita: number[] = [13, 14, 15, 16, 17, 18, 19, 21, 23, 26]
console.log('velocita', velocita);

interface sviluppo {
	corona: number;
	velocita: number;
	prodotto: number;
}

let sviluppi: sviluppo[] = [];

corone.forEach((c) => {
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