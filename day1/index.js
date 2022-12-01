const fs = require('fs');

const data = fs.readFileSync('./day1/input.txt', { encoding: 'utf8', flag: 'r' });
const lines = data.split(/\r?\n/);

const sumCals = [];
let sum = 0;

lines.forEach((l, i) => {
    if (l?.length > 0) {
        sum += parseInt(l);
    } else if (i > 0) {
        sumCals.push(sum);
        sum = 0;
    }
});

console.log('Part1: ', Math.max(...sumCals));

const fatElv1 = Math.max(...sumCals);
sumCals.splice(sumCals.indexOf(fatElv1), 1);
const fatElv2 = Math.max(...sumCals);
sumCals.splice(sumCals.indexOf(fatElv2), 1);
const fatElv3 = Math.max(...sumCals);
sumCals.splice(sumCals.indexOf(fatElv3), 1);

console.log('Part2: ', fatElv1 + fatElv2 + fatElv3);