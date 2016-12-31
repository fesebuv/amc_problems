

'use strict';

// const EventEmitter = require('promise-events');
const path = require('path');
const fs = require('fs');
const readline = require('readline');

const problem1 = require('../../src/problem1/problem1').problem1;

module.exports.fileReader = function(fileSource) {
  	let dataSet = [];
  	// let source = path.resolve(__dirname, fileSource);
  	// let source = '/Users/fesebuv/Documents/conde_nast/github/amc_problems/src/problem1/problem1.in';
  	// console.log(source);

	const lineReader = require('readline').createInterface({
	  input: require('fs').createReadStream('/Users/fesebuv/Documents/conde_nast/github/amc_problems/src/problem1/problem1.in')
	});

	lineReader.on('line', function (line) {
	  dataSet.push(line.split(' '));
	});


	lineReader.on('close', function() {
		let rawData = dataSet.slice(1);
		let data = rawData.map(function(value){
	    	return value[1];
	  	});
		problem1(data);
	});
};
