const args = process.argv.slice(2).map(num => +num);
const sum = args.reduce((total, num) => total + num, 0);

console.log(sum);
