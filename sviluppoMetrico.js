console.log('Hello World!');
var coronaGrande = [50, 34];
var velocita = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
var sviluppi = [];
coronaGrande.forEach(function (c) {
    velocita.forEach(function (v) {
        var s = {
            corona: c,
            velocita: v,
            prodotto: c * v
        };
        sviluppi.push(s);
    });
});
console.log('Sviluppi:\n', sviluppi);
console.log('\nSviluppi ordinati:\n', sviluppi.sort(function (a, b) {
    return a.prodotto - b.prodotto;
}));
