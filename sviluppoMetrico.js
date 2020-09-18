var corone = [50, 34];
console.log('Corona grande', corone);
var velocita = [13, 14, 15, 16, 17, 18, 19, 21, 23, 26];
console.log('velocita', velocita);
var sviluppi = [];
corone.forEach(function (c) {
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
