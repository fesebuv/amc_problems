

'use strict';

const fs = require('fs');
const readline = require('readline');
// const problem1 = require('./problem1/problem1').problem1;

const fileReader = require('./helpers/fileReader').fileReader;

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

fileReader('../../src/problem1/problem1.in');