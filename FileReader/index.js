const fs = require('fs');

module.exports = async (file) => {
  return new Promise(resolve => {
    let fileData = '';
    const stream = fs.createReadStream(file, { encoding: 'utf8' });

    stream.on('data', data => {
      fileData = fileData + data;
    });

    stream.on('close', () => {
      resolve(fileData);
    });
  });
};
