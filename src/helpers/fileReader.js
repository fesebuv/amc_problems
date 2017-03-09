

'use strict';

const path = require('path');
const fs = require('fs');
const readline = require('readline');

// module.exports.fileReader = function(cb, fileSource) {
//   let dataSet = [];
//   let source = path.resolve(__dirname, fileSource);
//
// 	const lineReader = readline.createInterface({
// 	  input: fs.createReadStream(source);
// 	});
//
// 	lineReader.on('line', function (line) {
// 	  dataSet.push(line.split(' '));
// 	});
//
//
// 	lineReader.on('close', function() {
// 		let rawData = dataSet.slice(1);
// 		let data = rawData.map(function(value){
// 	    	return value[1];
// 	  	});
// 		cb(data);
// 	});
// };

module.exports.fileReader = function(fileSource) {

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
      const rawData = dataSet.slice(1);
      return rawData.map(function (value) {
        return value.split(' ')[1];
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.outputReader = function(fileSource) {

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
