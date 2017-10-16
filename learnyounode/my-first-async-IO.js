const fs = require('fs');

fs.readFile(process.argv[2], { encoding: 'utf-8' }, (err, data) => {
  if (err) return console.log(err);
  const length = data.split('\n').length - 1;
  console.log(length);
});
