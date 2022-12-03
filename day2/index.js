const fs = require('fs');

const data = fs.readFileSync('./day2/input.txt', { encoding: 'utf8', flag: 'r' });
const lines = data.split(/\r?\n/).filter((l) => l?.length > 0);

let points = 0;

lines.forEach((l) => {
	const [elv, resp] = l.split(' ');

	switch (resp) {
		case 'X': // Rock.
			points += 1;
			if (elv === 'A') { // Rock.
				points += 3;
			} else if (elv === 'C') { // Scissors.
				points += 6;
			}
			break;
		case 'Y': // Paper.
			points += 2;
			if (elv === 'B') { // Paper.
				points += 3;
			} else if (elv === 'A') { // Rock.
				points += 6;
			}
			break;
		case 'Z': // Scissors.
			points += 3;
			if (elv === 'C') { // Scissors.
				points += 3;
			} else if (elv === 'B') { // Paper.
				points += 6;
			}
			break;
	}
});

console.log('Part 1: ', points);

let points2 = 0;

lines.forEach((l, i) => {
	const [elv, resp] = l.split(' ');

	switch (resp) {
		case 'X': // Lose.
			if (elv === 'A') { // Rock+Scissors.
				points2 += 3;
			} else if (elv === 'B') { // Paper+Rock.
				points2 += 1;
			} else {
				points2 += 2; // Scissors+Paper.
			}
			break;
		case 'Y': // Draw.
			if (elv === 'A') { // Rock+Rock.
				points2 += 4;
			} else if (elv === 'B') { // Paper+Paper.
				points2 += 5;
			} else {
				points2 += 6; // Scissors+Scissors.
			}
			break;
		case 'Z': // Win.
			if (elv === 'A') { // Rock+Paper.
				points2 += 8;
			} else if (elv === 'B') { // Paper+Scissors
				points2 += 9;
			} else {
				points2 += 7; // Scissors+Rock.
			}
			break;
	}
});

console.log('Part 2: ', points2);
