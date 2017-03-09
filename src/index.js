

'use strict';

const fs = require('fs');
const readline = require('readline');
const equal = require('deep-equal');

const problem1 = require('./problem1/problem1').problem1;
const problem2 = require('./problem2/problem2').problem2;

const fileReader = require('./helpers/fileReader').fileReader;
const outputReader = require('./helpers/fileReader').outputReader;

// let dataSet = [];

// const lineReader = require('readline').createInterface({
//   input: require('fs').createReadStream('./src/problem1/problem1.in')
// });

// lineReader.on('line', function (line) {
//   dataSet.push(line.split(' '));
// });


// lineReader.on('close', function() {
// 	// console.log(dataSet);
// 	let rawData = dataSet.slice(1);
// 	let data = rawData.map(function(value){
//     	return value[1];
//   	});
// 	problem1(data);
// });

const file1 = fileReader('../../src/problem1/problem1.in');
const file2 = fileReader('../../src/problem2/problem2.in');

const outputFile1 = outputReader('../../src/problem1/problem1.out');

file1.then((data) => {
  return problem1(data);
})
.then((p1) => {
  outputFile1.then((out) => {
    console.log(`is problem1 resolved? ${equal(p1, out)}`);
  });
});

// file2.then((data) => {
//   problem2(data);
// });
// fileReader(problem2, '../../src/problem2/problem2.in');
