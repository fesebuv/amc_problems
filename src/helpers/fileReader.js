'use strict';

const path = require('path');
const fs = require('fs');
const readline = require('readline');


function fileReader1(fileSource) {
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
    .then((dataSet) => {
      const rawData = dataSet.slice(1);
      return rawData.map(function (value) {
        return value.split(' ')[1];
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

function outputReader1(fileSource) {
  return Promise.resolve()
    .then(() => {
      const source = path.resolve(__dirname, fileSource);
      return readline.createInterface({
    	  input: fs.createReadStream(source)
    	});
    })
    .then((lineReader) => {
      return new Promise(function(resolve, reject){
        let dataSet = [];
        lineReader.on('line',function (line) {
          dataSet.push(line);
        });
        lineReader.on('close', function() {
          resolve(dataSet);
        });
      });
    })
    .then((dataSet) => {
      return dataSet;
    })
    .catch((err) => {
      console.log(err);
    });
};


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

module.exports = {
  inputReader,
  outputReader
};
