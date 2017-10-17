const fs = require('fs');
const path = require('path');

module.exports = function (directory, extension, callback) {
  fs.readdir(directory, (err, list) => {
    if (err) return callback(err);

    list = list.filter((file) => {
      if (path.extname(file) === `.${extension}`) return true;
    });
    return callback(null, list);
  });
};
