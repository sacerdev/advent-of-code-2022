const fs = require('fs');

const data = fs.readFileSync('./day1/input.txt', { encoding: 'utf8', flag: 'r' });
const lines = data.split(/\r?\n/);
