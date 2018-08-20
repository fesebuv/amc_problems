const path = require('path');
const fs = require('fs');
const readline = require('readline');

const FILES = ['problem1', 'problem2', 'problem1_2017'];

function fileReader (fileSource) {
  const source = path.resolve(__dirname, fileSource);
  return Promise.resolve()
    .then(() => {
      const responseObj = {
        input: fs.createReadStream(source)
      };
      return readline.createInterface(responseObj);
    })
    .then((lineReader) => {
      return new Promise(function (resolve, reject) {
        const dataSet = [];
        lineReader.on('line',(line) => {
          dataSet.push(line);
        });
        lineReader.on('close', () => {
          resolve(dataSet);
        });
      });
    })

    .catch((err) => {
      console.log(err);
    });
};

function inputReader (fileSource) {
  return fileReader(fileSource)
    .then((dataSet) => {
      const rawData = dataSet.slice(1);
      return rawData.map((value) => value.split(' ')[1]);
  });
}

function outputReader (fileSource) {
  return fileReader(fileSource);
}

function writeToFile(data, fileName) {
  const stream = fs.createWriteStream(`./build/${fileName}_output.txt`);
  stream.once('open', function() {
    data.forEach((line) => {
      stream.write(`${line}\n`);
    });
    stream.end();
  });
}

module.exports = {
  FILES,
  inputReader,
  outputReader,
  writeToFile
};
