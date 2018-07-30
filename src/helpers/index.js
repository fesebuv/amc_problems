'use strict';

const path = require('path');
const fs = require('fs');
const readline = require('readline');

const FILES = ['problem2'];

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
      return new Promise(function (resolve, reject){
        let dataSet = [];
        lineReader.on('line',function (line) {
          dataSet.push(line);
        });
        lineReader.on('close', function() {
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
      return rawData.map(function (value) {
        return value.split(' ')[1];
      });
  });
}

function outputReader (fileSource) {
  return fileReader(fileSource);
}

function writeToFile(data, fileName) {
  const stream = fs.createWriteStream(`./build/${fileName}/output.txt`);
  stream.once('open', function(fd) {
    data.forEach(function(line) {
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
