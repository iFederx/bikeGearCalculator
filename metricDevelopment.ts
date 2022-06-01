// replace the values of the following two lines with your own values
let crowns: number[] = [50, 34];
let speeds: number[] = [13, 14, 15, 16, 17, 18, 19, 21, 23, 26];

crowns = crowns.sort();
speeds = speeds.sort().reverse();

console.log('Bike gear calculator\n');
console.log('Crowns:\t', crowns);
console.log('Speeds:\t', speeds);

interface Development {
	// #region Properties (5)

	c_index: number;
	crown: number;
	metricDevelopment: number;
	s_index: number;
	speed: number;

	// #endregion Properties (5)
}

let developments: Development[] = [];

for (let c in crowns) {
	for (let s in speeds) {
		let d: Development = {
			crown: crowns[c],
			speed: speeds[s],
			metricDevelopment: crowns[c] / speeds[s],
			c_index: +c + 1,
			s_index: +s + 1
		};
		developments.push(d);
	}
}

let developmentsSorted = developments.sort((a, b) => {
	return a.metricDevelopment - b.metricDevelopment;
});

console.log('\nMetric developments sorted:\n');
for (let d of developmentsSorted) {
	console.log('(' + d.c_index + ',', d.s_index + ')\t', d.crown, 'x', d.speed + '\t=>', d.metricDevelopment);
}