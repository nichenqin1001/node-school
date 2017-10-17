const fs = require('fs');
const path = require('path');

const [dir, ext] = process.argv.slice(2);
fs.readdir(dir, (err, list) => {
  if (err) console.error(err.message);
  list.forEach((file) => {
    if (path.extname(file) === `.${ext}`) {
      console.log(file);
    }
  });
});
