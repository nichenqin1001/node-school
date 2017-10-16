const fs = require('fs');

const file = process.argv[2];

const buf = fs.readFileSync(file);
const len = buf.toString().split('\n').length - 1;
console.log(len);
