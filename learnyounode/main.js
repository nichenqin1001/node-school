const path = require('path');
const mymodule = require('./mymodule');

const dir = process.argv[2];
const filterExtension = process.argv[3];

const callback = function (err, list) {
  if (err) throw err;
  list.forEach((file) => {
    console.log(file);
  });
};

mymodule(dir, filterExtension, callback);
